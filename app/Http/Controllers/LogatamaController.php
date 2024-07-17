<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogatamaController
{
    function index()
    {
        return Inertia::render('BerandaLogatama/index');
    }
    function panduan()
    {
        return Inertia::render('Panduan/index');
    }
    function pengumuman()
    {
        return Inertia::render('Pengumuman/index');
    }
    function auth(Request $request)
    {
        //authenticate
        $request->validate(
            [
                'username' => 'required',
                'password' => 'required|min:8',
            ],
            [
                'username.required' => 'Username harus diisi!',
                'password.required' => 'Password harus diisi!',
                'password.min' => 'Password minimal 8 karakter!',
            ],
        );
        $credential = [
            'username' => $request->username,
            'password' => $request->password,
        ];

        if (Auth::guard('admins')->attempt($credential)) {
            // return 'sukses';
            return redirect()->intended('/lctp/dashboard-soal');
        }

        return back()
            ->withErrors([
                'username' => 'Username/password salah!',
            ])
            ->onlyInput('username');
    }
     function logout()
    {
        if (Auth::guard('admins')->check()) {
            Auth::guard('admins')->logout();
            return redirect('/login-soal');
        }
        return redirect()->back();
    }
    function soal()
    {
        return Inertia::render('loginSoal/index');
    }
    function admin()
    {
        return 'halaman login admin logatama';
    }
}
