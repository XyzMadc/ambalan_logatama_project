<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\Pengumuman;
use App\Models\Dokumentasi;
use App\Models\Faq;
use App\Models\Peserta;
use Illuminate\Support\Facades\Schema;


class LogatamaController
{
    function index()
    {
        return Inertia::render('BerandaLogatama/index');
    }
    function tentangLogatama()
    {
        return Inertia::render('TentangLogatama/index');
    }
    function panduan()
    {
        $faq = Faq::select('pertanyaan', 'jawaban')->get();
        return Inertia::render('Panduan/index', ['faqs' => $faq]);
    }

    function pengumuman(Request $request)
    {
        $announcements = Pengumuman::all();
        $dokumentasi = Dokumentasi::select('path')->get();
        $bidangList = DB::table('information_schema.columns')
            ->where('table_schema', env('DB_DATABASE'))
            ->where('table_name', 'pesertas')
            ->whereNotIn('column_name', ["id", "team_id", "pangkalan", "username", "password", "role", "tingkat", "kategori", "email", "created_at", "updated_at"])
            ->pluck('COLUMN_NAME');
        $bidang = $request->input('bidang');
        if (!Schema::hasColumn('pesertas', $bidang)) {
            $bidang = 'lctp';
        }
        $data = Peserta::where($bidang, '>', 0);
        if ($data->exists()) {
            $penegak = Peserta::where('tingkat', 'penegak')
                ->orderBy('kategori')
                ->orderBy($bidang, 'desc')
                ->select('kategori', $bidang, 'pangkalan', 'tingkat')
                ->get()
                ->groupBy('kategori')
                ->map(function ($items) {
                    return $items->take(3);
                });

            $penggalang = Peserta::where('tingkat', 'penggalang')
                ->orderBy('kategori')
                ->orderBy($bidang, 'desc')
                ->select('kategori', $bidang, 'pangkalan', 'tingkat')
                ->get()
                ->groupBy('kategori')
                ->map(function ($items) {
                    return $items->take(3);
                });

            $juara = ['bidang' => $bidang, 'penggalang' => $penggalang, 'penegak' => $penegak];
        } else {
            $default = array_map(fn() => ['pangkalan' => 'Coming Soon', $bidang => 'xxx'], [1, 2, 3]);
            $juara = ['bidang' => $bidang, 'penggalang' => ['putra' => $default, 'putri' => $default], 'penegak' => ['putra' => $default, 'putri' => $default]];
        }
        return Inertia::render('Pengumuman/index', ['bidangList' => $bidangList, 'announcements' => $announcements, 'pesertaRekapitulasi' => $juara,'dokumentasi'=>$dokumentasi]);
    }

    function loginsoal()
    {
        return Inertia::render('Auth/loginSoal/index');
    }
    
    function loginadmin()
    {
        return Inertia::render('Auth/loginAdmin/index');
    }

    function auth(Request $request)
    {
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
            if ($login_as == 'admin') {
                $origin = explode('/', url()->previous());
                if (end($origin) == 'login-soal') {
                    return redirect('/admin-lctp/dashboard');
                } else if (end($origin) == 'login-admin') {
                    return redirect('/admin-logatama/dashboard');
                }
                return redirect()->back();
            } else if ($login_as == 'peserta') {
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
            if ($login_as == 'admin') {
                Auth::guard('peserta')->logout();
                return redirect('/login-admin');
            } else if ($login_as == 'peserta') {
                Auth::guard('peserta')->logout();
                return redirect('/login-soal');
            }
            return redirect()->back();
        }
        return redirect()->back();
    }
}
