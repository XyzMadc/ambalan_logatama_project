<?php

namespace App\Http\Controllers;
// namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Models\Peserta;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminLogatamaController
{
    function index()
    {
        $peserta = Peserta::where('role', 'peserta')->get();
        // return "halaman admin logatama dashboard " . $peserta;
        return response("halaman admin logatama dashboard \n\n\n" . $peserta, 200)->header('Content-Type', 'text/plain');
    }
    function login()
    {
        //login-view
        return view('tes.LoginAdmin');
    }
    function logout()
    {
        if (Auth::guard('admins')->check()) {
            Auth::guard('admins')->logout();
            return redirect('admin-logatama/login');
        }
        return redirect()->back();
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
    function pengumuman()
    {
        return 'halaman admin logatama pengumuman';
    }
    function rekap()
    {
        return 'halaman admin logatama rekap juara';
    }
}
