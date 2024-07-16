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
        Route::get('/login-admin', 'admin');
    });

// ini tambahin middleware peserta
Route::controller(LctpController::class)
    ->prefix('/lctp')
    ->group(function () {
        Route::get('/dashboard-soal', 'index');
        Route::get('/soal/{id}', 'soal'); //id buat identifier timnya bukan nomer soal
        // Route::get('/', '');
    });

//ini tambahin middleware admin
Route::controller(AdminLogatamaController::class)
    ->prefix('/admin-logatama')
    ->group(function () {
        Route::get('/dashboard', 'index');
        Route::get('/pengumuman', 'pengumuman');
        Route::get('/rekap-juara', 'rekap');
        Route::get('/login', 'login');
        Route::post('/login', 'auth');
//         Route::get('/', '');
    });

// //ini tambahin middleware admin
Route::controller(AdminLctpController::class)
    ->prefix('/admin-lctp')
    ->group(function () {
        Route::get('/dashboard', 'index');
//         Route::get('/', '');
    });


    //login-admin-tes

require __DIR__ . '/auth.php';


