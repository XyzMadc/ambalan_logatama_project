<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Soal;
use App\Models\Lctp;
use Carbon\Carbon;


class LctpController
{
    function index()
    {
        $user_data = Auth::guard('peserta')->user();
        $all_team = Lctp::pluck('team_id')->toArray();
        if (!in_array($user_data->team_id, $all_team)) {
            Lctp::create([
                'team_id' => $user_data->team_id,
                'mulai',
                'jawaban' => json_encode(array_fill(0, 50, null)),
                'berakhir',
                'tingkat' => $user_data->tingkat,
                'status' => 0
            ]);
        }
        $userTestData = Lctp::where('status', 0)->where('team_id', $user_data->team_id)->select('team_id', 'mulai', 'berakhir', 'tingkat', 'status')->first();
        $start = Carbon::parse($userTestData->mulai)->translatedFormat('d F Y H.i');
        $end = Carbon::parse($userTestData->berakhir)->translatedFormat('d F Y H.i');
        $range = Carbon::parse($userTestData->berakhir)->timestamp - Carbon::parse($userTestData->mulai)->timestamp;

        if (time() > Carbon::parse($userTestData->berakhir)->timestamp) {
            $userTestData->tesStatus = 'Telah Berakhir';
        } else if (time() < Carbon::parse($userTestData->mulai)->timestamp) {
            $userTestData->tesStatus = 'Belum Dimulai';
        } else if (time() > Carbon::parse($userTestData->mulai)->timestamp && (time() < Carbon::parse($userTestData->berakhir)->timestamp)) {
            $userTestData->tesStatus = 'Sedang Berlangsung';
        }

        $userTestData->waktu = round($range / 3600) . ' jam';
        $userTestData->mulai = $start;
        $userTestData->berakhir = $end;
        if ($userTestData->status == 0) {
            if (in_array(!null,json_decode(Lctp::where('team_id', $user_data->team_id)->pluck('jawaban')->first()))) {
                $userTestData->status = 'Sedang Dikerjakan';
            }else{
                $userTestData->status = 'Belum Dikerjakan';
            }
        } elseif ($userTestData->status == 1) {
            $userTestData->status = 'Sudah Dikerjakan';
        }

        $userTestData->jumlahSoal = count(Soal::where('tingkat', $user_data->tingkat)->get()) . ' Soal';


        return Inertia::render('LCTP/Dashboard/index', ['userTestData' => $userTestData]);
    }

    function soal(Request $request){
        $user_data = Auth::guard('peserta')->user();
        $userTestData = Lctp::where('status',0)->where('team_id',$user_data->team_id)->select('team_id','mulai','berakhir','tingkat','status')->first();
        if($request->id == $user_data->team_id) {
            if (time() > Carbon::parse($userTestData->mulai)->timestamp && time() < Carbon::parse($userTestData->berakhir)->timestamp){
                $tingkat =Auth::guard('peserta')->user()->tingkat;
                $storedAnswers = Lctp::where('team_id', $user_data->team_id)->pluck('jawaban')->first();
                $question = Soal::where('tingkat',$tingkat)->get();
                $questions = [
                    'id' => $userTestData->team_id,
                    'soal' => $question,
                    'tingkat' => $tingkat,
                    'storedAnswers' => $storedAnswers
                ];
                return Inertia::render('LCTP/Soal/index',['questions'=> $questions]);
            }
            return redirect('/lctp/dashboard-soal');
        }
        return redirect('/lctp/dashboard-soal');
    }

    function storeTempAnswer(Request $request){
        $user_data = Auth::guard('peserta')->user();
        $userTestData = Lctp::where('status',0)->where('team_id',$user_data->team_id)->select('team_id','mulai','berakhir','tingkat','status')->first();
        if($request->id == $user_data->team_id) {
            if (time() > Carbon::parse($userTestData->mulai)->timestamp && time() < Carbon::parse($userTestData->berakhir)->timestamp){
                $validated = $request->validate([
                    'jawaban' => 'required|array|size:50',
                ]);

                if ($validated) {
                Lctp::where('team_id',$user_data->team_id)
                ->update([
                        'jawaban' => $request->jawaban,
                    ]);
                // return 'tersimpan';
                }
            }
            return redirect('/lctp/soal/'.$user_data->team_id);
        }
        return redirect('/lctp/soal/'.$user_data->team_id);
    }
}
