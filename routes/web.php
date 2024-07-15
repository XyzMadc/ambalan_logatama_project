<?php

// use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\AmbalanController;
use App\Http\Controllers\LogatamaController;

Route::controller(AmbalanController::class)
    ->prefix('/')
    ->group(function () {
        Route::get('/', 'index')->name('beranda');
        Route::get('/tentang', 'tentang');
        Route::get('/kegiatan', 'kegiatan');
        Route::get('/kontak', 'kontak')->name('kontak');
        Route::post('/kontak/mail', 'email')->name('contactMail');
    });


Route::controller(LogatamaController::class)
    ->prefix('/')
    ->group(function () {
        Route::get('/logatama', 'index')->name('logatama');
        Route::get('/panduan', 'tentang');
        Route::get('/pengumuman', 'kegiatan');
        Route::get('/login-soal', 'soal');
    });

require __DIR__ . '/auth.php';


