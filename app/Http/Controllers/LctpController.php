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
    function index(){
        $user_data = Auth::guard('peserta')->user();
        $all_team = Lctp::pluck('team_id')->toArray();
        if (!in_array($user_data->team_id,$all_team)){
            Lctp::create([
                'team_id' => $user_data->team_id ,
                'mulai',
                'jawaban'=>'[]',
                'berakhir',
                'tingkat' => $user_data->tingkat,
                'status' => 0
            ]);
        }
        $userTestData = Lctp::where('status',0)->where('team_id',$user_data->team_id)->select('team_id','mulai','berakhir','tingkat','status')->first();
        $start = Carbon::parse($userTestData->mulai)->translatedFormat('d F Y H.i');
        $end = Carbon::parse($userTestData->berakhir)->translatedFormat('d F Y H.i');
        $range = Carbon::parse($userTestData->berakhir)->timestamp - Carbon::parse($userTestData->mulai)->timestamp;

        if (time() > Carbon::parse($userTestData->berakhir)->timestamp){
            $userTestData -> tesStatus = 'Telah Berakhir';
        }else if (time() < Carbon::parse($userTestData->mulai)->timestamp){
            $userTestData -> tesStatus = 'Belum Dimulai';
        }else if (time() > Carbon::parse($userTestData->mulai)->timestamp && (time() < Carbon::parse($userTestData->berakhir)->timestamp)){
            $userTestData -> tesStatus = 'Sedang Berlangsung';
        }

        $userTestData -> waktu = round($range/3600) .' jam';
        $userTestData -> mulai = $start;
        $userTestData -> berakhir = $end;
        if ($userTestData -> status == 0){
            $userTestData -> status = 'Belum Dikerjakan';
        }elseif ($userTestData -> status == 1) {
            $userTestData -> status = 'Sedang Dikerjakan';
        }elseif (count(json_decode(Lctp::where('team_id',$user_data->team_id)->pluck('jawaban')->first()))>0){
            $userTestData -> status = 'Selesai Dikerjakan';
        }

        $userTestData -> jumlahSoal = count(Soal::where('tingkat',$user_data->tingkat)->get()) . ' Soal';


        return Inertia::render('LCTP/Dashboard/index',['userTestData'=>$userTestData]);
    }

    function soal(Request $request){
        $kategori =Auth::guard('peserta')->user()->tingkat;
        $questions = Soal::where('tingkat',$kategori)->get();
        return Inertia::render('LCTP/Soal/index',['questions'=> $questions]);
    }

}
