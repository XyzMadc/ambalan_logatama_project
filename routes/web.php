<?php

// use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use App\Http\Controllers\AmbalanController;
use App\Http\Controllers\LogatamaController;
use App\Http\Controllers\LctpController;
use App\Http\Controllers\AdminLogatamaController;
use App\Http\Controllers\AdminLctpController;

// URL::forceScheme('https');
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
        Route::get('/panduan', 'panduan');
        Route::get('/pengumuman', 'pengumuman');
        Route::middleware('guest')->group(function () {
            Route::get('/login-soal', 'loginsoal');
            Route::get('/login-admin', 'loginadmin');
            Route::post('/login', 'auth')->middleware('throttle:login');
        });
        Route::post('/logout', 'logout');
    });


Route::controller(LctpController::class)
    ->prefix('/lctp')
    ->group(function () {
        Route::middleware('peserta.auth')->group(function () {
            Route::get('/dashboard-soal', 'index');
            Route::get('/soal/{id}', 'soal');
            Route::post('/soal/{id}', 'storeTempAnswer');
            Route::post('/soal/{id}/submit', 'submit');
        });
    });


Route::prefix('/admin-logatama')
    ->controller(AdminLogatamaController::class)
    ->group(function () {
        Route::middleware('admin.auth')->group(function () {
            Route::get('/dashboard', 'index');
            Route::get('/pengumuman', 'pengumuman');
            Route::get('/soal', 'soal');
            Route::get('/review-soal', 'reviewSoal');
            Route::get('/create-soal', 'createSoal');
            Route::get('/rekap-juara', 'rekap');
            Route::get('/faq', 'faq');
            Route::get('/dokumentasi', 'dokumentasi');
            Route::post('/pengumuman', 'createPengumuman');
            Route::post('/rekap-juara', 'createRekap');
            Route::post('/faq', 'createFaq');
            Route::post('/dokumentasi', 'createDokumentasi');
        });
    });


Route::controller(AdminLctpController::class)
    ->prefix('/admin-lctp')
    ->group(function () {
        Route::middleware('admin.auth')->group(function () {
            Route::get('/dashboard', 'index');
            Route::get('/soal', 'soal');
        });
    });

require __DIR__ . '/auth.php';
