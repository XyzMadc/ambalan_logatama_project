<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Pengumuman;

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
        $announcements =Pengumuman::all();
        return Inertia::render('Pengumuman/index',['announcements'=>$announcements]);
    }
    function loginsoal()
    {
        return Inertia::render('loginSoal/index');
    }
    function loginadmin()
    {
            return view('tes.LoginAdmin');
        // return 'halaman login admin logatama';
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

        if (Auth::guard('peserta')->attempt($credential)) {
            $login_as = Auth::guard('peserta')->user()->role;
            if ($login_as == 'admin'){
                $origin = explode('/',url()->previous());
                if (end($origin) == 'login-soal'){
                    return redirect('/admin-lctp/dashboard');
                } else if(end($origin) == 'login-admin') {
                    return redirect('/admin-logatama/dashboard');
                }
                return redirect()->back();
            // return redirect()->intended('/lctp/dashboard-soal');
            }else if($login_as == 'peserta' ){
                return redirect('/lctp/dashboard-soal');
            }
            return redirect()->back();
        }

        return back()
            ->withErrors([
                'username' => 'Username/password salah!',
            ])
            ->onlyInput('username');
    }
     function logout()
    {
        if (Auth::guard('peserta')->check()) {
            $login_as = Auth::guard('peserta')->user()->role;
            if ($login_as == 'admin'){
                Auth::guard('peserta')->logout();
                return redirect('/login-admin');
            }else if($login_as == 'peserta' ){
                Auth::guard('peserta')->logout();
                return redirect('/login-soal');
            }
            return redirect()->back();
        }
        return redirect()->back();
    }
}
