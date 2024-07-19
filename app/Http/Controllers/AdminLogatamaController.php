<?php

namespace App\Http\Controllers;
// namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Models\Peserta;
use App\Models\Pengumuman;
use Inertia\Inertia;

class AdminLogatamaController
{
    function index()
    {
        $peserta = Peserta::where('role', 'peserta')->get();
        return Inertia::render('Admin/Dashboard/index', [
            'peserta' => $peserta,
        ]);
    }
    function pengumuman()
    {
        return Inertia::render('Admin/Pengumuman/index');
    }
    function createPengumuman(Request $request)
    {

        $validated = $request->validate([
            'judul' => 'required|string|max:300',
            'deskripsi' => 'required|string|max:1000',
            // 'tanggal' => 'required|string|max:50',
        ]);

        if ($validated) {
            Pengumuman::create([
                'judul' => $request->query('judul'),
                'deskripsi' => $request->query('deskripsi'),
            ]);
            return Pengumuman::all();
        }
    }
    function rekap()
    {
        return Inertia::render('Admin/Rekap/index');
    }
    function createRekap(Request $request)
    {

        $validated = $request->validate([
            'peringkat' => 'required|string|max:300',
            'nama_pangkalan' => 'required|string|max:1000',
            'skor_nilai' => 'required|number|max:6',
        ]);

        // if ($validated) {
        //     Pengumuman::create([
        //         'peringkat' => $request->query('peringkat'),
        //         'nama_pangkalan' => $request->query('nama_pangkalan'),
        //         'skor_nilai' => $request->query('skor_nilai'),
        //     ]);
        //     return Pengumuman::all();
        // }
    }
}
