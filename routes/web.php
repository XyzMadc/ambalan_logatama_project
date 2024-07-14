<?php

use App\Mail\tes;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\MailController;
use App\Http\Controllers\ProfileController;

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
})->name('contact');
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


Route::get('/mailtes',function(){
    Mail::to('isyamuhammad341@gmail.com')->send(new tes());
});

Route::post('/contact/mail', [MailController::class, 'contact'])->name('contactMail');