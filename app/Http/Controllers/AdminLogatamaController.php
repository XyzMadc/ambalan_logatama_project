<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Peserta;

class AdminLogatamaController
{
    function index(){
        $peserta =Peserta::where('role','peserta')->get();
        // return "halaman admin logatama dashboard " . $peserta;
        return response("halaman admin logatama dashboard \n\n\n".$peserta, 200)->header('Content-Type', 'text/plain');
    }
    function pengumuman(){
        return 'halaman admin logatama pengumuman';
    }
    function rekap(){
        return 'halaman admin logatama rekap juara';
    }
}
