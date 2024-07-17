<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LctpController
{
    function index(){
        return 'buat page dashboard soal';
    }

    function soal(Request $request){
        return "buat page dashboard soal $request->id";
    }
}
