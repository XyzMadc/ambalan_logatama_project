<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AmbalanController
{
    function index(){
        return Inertia::render('BerandaAmbalan/index');
    }

    function tentang(){
        return Inertia::render('Tentang/index');
    }

    function kontak(){
        return Inertia::render('Kontak/index');
    }

    function kegiatan(){
        return Inertia::render('Kegiatan/index');
    }
}
