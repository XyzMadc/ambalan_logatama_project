<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminLogatamaController
{
    function index(){
        return 'halaman admin logatama dashboard';
    }
    function pengumuman(){
        return 'halaman admin logatama pengumuman';
    }
    function rekap(){
        return 'halaman admin logatama rekap juara';
    }
}
