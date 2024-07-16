<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminLctpController
{
    function index()
    {
        return 'halaman admin LCTP dashboard';
    }

    function login()
    {
        //login-view
        return view('tes.LoginAdmin');
    }
    function logout()
    {
        Auth::guard('admins')->logout();
        return redirect('admin-logatama/login');
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
            return redirect()->intended('admin-logatama/dashboard');
        }

        return back()
            ->withErrors([
                'username' => 'Username/password salah!',
            ])
            ->onlyInput('username');
    }
}
