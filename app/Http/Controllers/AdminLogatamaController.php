<?php

namespace App\Http\Controllers;
// namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Models\Peserta;
use App\Models\Pengumuman;
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
    function pengumuman()
    {
        return 'halaman admin logatama pengumuman';
    }
    function createPengumuman(Request $request){

        $validated = $request->validate([
            'judul' => 'required|string|max:300',
            'deskripsi' => 'required|string|max:1000',
            // 'tanggal' => 'required|string|max:50',
        ]);

        if ($validated){
            Pengumuman::create([
                'judul' => $request->query('judul'),
                'deskripsi' => $request->query('deskripsi'),
            ]);
            return Pengumuman::all();
        }
    }
    function rekap()
    {
        return 'halaman admin logatama rekap juara';
    }
}
