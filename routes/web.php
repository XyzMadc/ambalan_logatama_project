<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('BerandaAmbalan/index');
});
Route::get('/about', function () {
    return Inertia::render('Tentang/index');
});
Route::get('/kegiatan', function () {
    return Inertia::render('Kegiatan/index');
});
Route::get('/contact', function () {
    return Inertia::render('Kontak/index');
});
Route::get('/logatama', function () {
    return Inertia::render('BerandaLogatama/index');
});
Route::get('/guide', function () {
    return Inertia::render('Panduan/index');
});
Route::get('/announcement', function () {
    return Inertia::render('Pengumuman/index');
});

require __DIR__ . '/auth.php';
