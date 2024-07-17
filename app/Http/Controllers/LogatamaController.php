<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Pengumuman;

class LogatamaController
{
    function index() {
        return Inertia::render('BerandaLogatama/index');
    }
    function panduan() {
        return Inertia::render('Panduan/index');
    }
    function pengumuman() {
        $announcements =Pengumuman::all();
        return Inertia::render('Pengumuman/index',['announcements'=>$announcements]);
    }
    function soal() {
        return Inertia::render('loginSoal/index');
    }
    function admin() {
        return 'halaman login admin logatama';
    }
}
