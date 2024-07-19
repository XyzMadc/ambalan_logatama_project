<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LctpController
{
    function index(){
        return Inertia::render('LCTP/Dashboard/index');
    }

    function soal(Request $request){
        return "buat page dashboard soal $request->id";
    }
}
