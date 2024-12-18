<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Soal;
use App\Models\Lctp;
use App\Models\Peserta;
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
                'jawaban' => json_encode(array_fill(0,count(Soal::where('tingkat', $user_data->tingkat)->get()) , null)),
                'berakhir',
                'tingkat' => $user_data->tingkat,
                'status' => 0
            ]);
        }
        $userTestData = Lctp::where('team_id', $user_data->team_id)->select('team_id', 'mulai', 'berakhir', 'tingkat', 'status')->first();
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
            if (in_array(!null, json_decode(Lctp::where('team_id', $user_data->team_id)->pluck('jawaban')->first()))) {
                $userTestData->status = 'Sedang Dikerjakan';
            } else {
                $userTestData->status = 'Belum Dikerjakan';
            }
        } elseif ($userTestData->status == 1) {
            $userTestData->status = 'Sudah Dikerjakan';
        }

        $userTestData->jumlahSoal = count(Soal::where('tingkat', $user_data->tingkat)->get()) . ' Soal';


        return Inertia::render('LCTP/Dashboard/index', ['userTestData' => $userTestData]);
    }

    function soal(Request $request)
    {
        $user_data = Auth::guard('peserta')->user();
        $userTestData = Lctp::where('status', 0)->where('team_id', $user_data->team_id)->select('team_id', 'mulai', 'berakhir', 'tingkat', 'status')->first();
        if ($userTestData){
            if ($request->id == $user_data->team_id) {
                if (time() > Carbon::parse($userTestData->mulai)->timestamp && time() < Carbon::parse($userTestData->berakhir)->timestamp) {
                    $tingkat = Auth::guard('peserta')->user()->tingkat;
                    $storedAnswers = Lctp::where('team_id', $user_data->team_id)->pluck('jawaban')->first();
                    $question = Soal::where('tingkat', $tingkat)->select('id','pertanyaan','pilihan','images','tingkat')->get();
                    $sisa_waktu = Carbon::parse($userTestData->berakhir)->timestamp - time();
                    $questions = [
                        'id' => $userTestData->team_id,
                        'soal' => $question,
                        'tingkat' => $tingkat,
                        'remainingTime'=>$sisa_waktu,
                        'storedAnswers' => $storedAnswers
                    ];
                    // return $questions;
                    return Inertia::render('LCTP/Soal/index', ['questions' => $questions]);
                }
                return redirect('/lctp/dashboard-soal');
            }
        }
        return redirect('/lctp/dashboard-soal');
    }

    function storeTempAnswer(Request $request)
    {
        $user_data = Auth::guard('peserta')->user();
        $userTestData = Lctp::where('status', 0)->where('team_id', $user_data->team_id)->select('team_id', 'mulai', 'berakhir', 'tingkat', 'status')->first();
        if ($userTestData){
            if ($request->id == $user_data->team_id) {
                if (time() > Carbon::parse($userTestData->mulai)->timestamp && time() < Carbon::parse($userTestData->berakhir)->timestamp) {
                    $validated = $request->validate([
                        'jawaban' => ['required', 'array', 'size:' . count(Soal::where('tingkat', $user_data->tingkat)->get())]
                    ]);

                    if ($validated) {
                        Lctp::where('team_id', $user_data->team_id)
                            ->update([
                                'jawaban' => $request->jawaban,
                            ]);
                    }else{
                        return back()->withErrors(['gagal'=>'Jawaban Gagal Tersimpan']);
                    }
                }
                return redirect('/lctp/soal/' . $user_data->team_id);
            }
        }
        return redirect('/lctp/soal/' . $user_data->team_id);
    }
    function submit(Request $request)
    {
        $user_data = Auth::guard('peserta')->user();
        $userTestData = Lctp::where('status', 0)->where('team_id', $user_data->team_id)->select('team_id', 'mulai', 'berakhir', 'tingkat', 'status')->first();
        $tingkat = Auth::guard('peserta')->user()->tingkat;
        $kunci_jawaban = Soal::where('tingkat', $tingkat)->select('jawaban','poin')->get();
        if ($userTestData){
            $validated = $request->validate([
                'jawaban' => ['required', 'array', 'size:' . count($kunci_jawaban)]
            ]);
            if ($request->id == $user_data->team_id && $validated) {
                if (time() < Carbon::parse($userTestData->berakhir)->timestamp) {
                    if ($request->cheat != 'True'){
                        $user_answer = $request->jawaban;
                        if (in_array(null,$user_answer)){
                            return back()->withErrors(['kosong'=>'Jawaban Harus Terisi Semua']);
                        }

                        $jawaban = array_map(function($question, $questionIndex) use ($kunci_jawaban) {
                                if ($question!=null && $question == $kunci_jawaban[$questionIndex]->jawaban){
                                    return $kunci_jawaban[$questionIndex]->poin;
                                }else{
                                    return 0;
                                }
                            }, $user_answer, array_keys($user_answer));
                        $nilai = array_sum($jawaban);
                        Lctp::where('team_id', $user_data->team_id)
                            ->update([
                                'jawaban' => $request->jawaban,
                                'status' => 1,
                            ]);
                        Peserta::where('team_id', $user_data->team_id)
                            ->update([
                                'lctp' => $nilai,
                            ]);
                        return redirect('/lctp/dashboard-soal');

                    }elseif ($request->cheat == 'True') {
                        $user_answer = $request->jawaban;
                        $jawaban = array_map(function($question, $questionIndex) use ($kunci_jawaban) {
                                if ($question!=null && $question == $kunci_jawaban[$questionIndex]->jawaban){
                                    return $kunci_jawaban[$questionIndex]->poin;
                                }else{
                                    return 0;
                                }
                            }, $user_answer, array_keys($user_answer));
                        $nilai = array_sum($jawaban);
                        Lctp::where('team_id', $user_data->team_id)
                            ->update([
                                'jawaban' => $request->jawaban,
                                'status' => 1,
                            ]);
                        Peserta::where('team_id', $user_data->team_id)
                            ->update([
                                'lctp' => $nilai,
                            ]);
                        return redirect('/lctp/dashboard-soal');
                    }

                    return redirect('/lctp/soal/' . $user_data->team_id);

                } elseif (time() >= Carbon::parse($userTestData->berakhir)->timestamp) {
                    $user_answer = $request->jawaban;
                    $jawaban = array_map(function($question, $questionIndex) use ($kunci_jawaban) {
                            if ($question!=null && $question == $kunci_jawaban[$questionIndex]->jawaban){
                                return $kunci_jawaban[$questionIndex]->poin;
                            }else{
                                return 0;
                            }
                        }, $user_answer, array_keys($user_answer));
                    $nilai = array_sum($jawaban);
                    Lctp::where('team_id', $user_data->team_id)
                        ->update([
                            'jawaban' => $request->jawaban,
                            'status' => 1,
                        ]);
                    Peserta::where('team_id', $user_data->team_id)
                        ->update([
                            'lctp' => $nilai,
                        ]);
                    return redirect('/lctp/dashboard-soal');
                }
                return redirect('/lctp/soal/' . $user_data->team_id);
            }
        }
        return redirect('/lctp/soal/' . $user_data->team_id);
    }
}
