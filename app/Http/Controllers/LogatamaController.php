<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LogatamaController
{
    function index() {
        return Inertia::render('BerandaLogatama/index');
    }
    function panduan() {
        return Inertia::render('Panduan/index');
    }
    function pengumuman() {
        return Inertia::render('Pengumuman/index');
    }
    function soal() {
        return Inertia::render('loginSoal/index');
    }
}
