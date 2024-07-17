<?php

// use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AmbalanController;
use App\Http\Controllers\LogatamaController;
use App\Http\Controllers\LctpController;
use App\Http\Controllers\AdminLogatamaController;
use App\Http\Controllers\AdminLctpController;

// ini middleware guest sembarang mau dikasi apa ga
Route::controller(AmbalanController::class)
    ->prefix('/')
    ->group(function () {
        Route::get('/', 'index')->name('beranda');
        Route::get('/tentang', 'tentang');
        Route::get('/kegiatan', 'kegiatan');
        Route::get('/kontak', 'kontak')->name('kontak');
        Route::post('/kontak/mail', 'email')->name('contactMail');
    });

// ini middleware guest sembarang mau dikasi apa ga
Route::controller(LogatamaController::class)
    ->prefix('/')
    ->group(function () {
        Route::get('/logatama', 'index')->name('logatama');
        Route::get('/panduan', 'tentang');
        Route::get('/pengumuman', 'kegiatan');
        Route::get('/login-soal', 'soal');
        Route::get('/logout-soal', 'logout');
        Route::post('/login-soal', 'auth');
        Route::get('/login-admin', 'admin');
    });

// ini tambahin middleware peserta
Route::controller(LctpController::class)
    ->prefix('/lctp')
    ->group(function () {
         Route::middleware('peserta.auth')->group(function () {
             Route::get('/dashboard-soal', 'index');
             Route::get('/soal/{id}', 'soal'); //id buat identifier timnya bukan nomer soal
        });
        // Route::get('/', '');
    });

//ini tambahin middleware admin
Route::prefix('/admin-logatama')
    ->controller(AdminLogatamaController::class)
    ->group(function () {
        Route::middleware('admin.auth')->group(function () {
            Route::get('/dashboard', 'index');
            Route::get('/pengumuman', 'pengumuman');
            Route::get('/rekap-juara', 'rekap');
            Route::get('/logout', 'logout')->name('logout');
        });
        Route::middleware('admin.guest')->group(function () {
            Route::get('/login', 'login')->name('admin.login');
        });

        Route::post('/login', 'auth');
        
    });

// //ini tambahin middleware admin
Route::controller(AdminLctpController::class)
    ->prefix('/admin-lctp')
    ->group(function () {
        Route::middleware('admin.auth')->group(function () {
            Route::get('/dashboard', 'index');
        });
    });

require __DIR__ . '/auth.php';
