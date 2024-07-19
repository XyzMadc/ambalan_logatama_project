<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Pengumuman;
use App\Models\Peserta;
use Illuminate\Support\Facades\Schema;


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
    function pengumuman(Request $request)
    {
        $announcements =Pengumuman::all();
        // $bidang = 'lctp';
        $bidang = $request->query('bidang');
        if(!Schema::hasColumn('pesertas', $bidang)){
            return redirect()->back();
        }
        $data = Peserta::where($bidang,'>',0);
        if ($data->exists())
        {
            $penegak = Peserta::where('tingkat','penegak')->orderBy('kategori')->orderBy($bidang, 'desc')->select('kategori',$bidang,'pangkalan','tingkat')->get()->groupBy('kategori')->map(function ($items) {
                return $items->take(3);
            });

            $penggalang = Peserta::where('tingkat','penggalang')->orderBy('kategori')->orderBy($bidang, 'desc')->select('kategori',$bidang,'pangkalan','tingkat')->get()->groupBy('kategori')->map(function ($items) {
                return $items->take(3);
            });
            $juara = ['bidang'=>$bidang,'penggalang'=>$penggalang,'penegak'=>$penegak];
            // return $juara;
        }else {
            $default = array_map(fn() =>['pangkalan'=>'Coming Soon',$bidang=>'xxx'], [1,2,3]);
            $juara = ['bidang'=>$bidang,'penggalang'=>['putra'=>$default,'putri'=>$default],'penegak'=>['putra'=>$default,'putri'=>$default]];
            // return $juara;
        }
        return Inertia::render('Pengumuman/index',['announcements'=>$announcements,'pesertaRekapitulasi'=>$juara]);
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

