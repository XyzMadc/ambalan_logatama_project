<?php

// use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\AmbalanController;
use App\Http\Controllers\LogatamaController;

Route::controller(AmbalanController::class)
    ->prefix('/')
    ->name('beranda')
    ->group(function () {
        Route::get('/', 'index');
        Route::get('/tentang', 'tentang');
        Route::get('/kegiatan', 'kegiatan');
        Route::get('/kontak', 'kontak');
    });


Route::controller(LogatamaController::class)
    ->prefix('/')
    ->name('logatama')
    ->group(function () {
        Route::get('/logatama', 'index');
        Route::get('/panduan', 'tentang');
        Route::get('/pengumuman', 'kegiatan');
        Route::get('/login-soal', 'soal');
    });

require __DIR__ . '/auth.php';
