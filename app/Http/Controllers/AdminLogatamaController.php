<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Peserta;
use App\Models\Pengumuman;

class AdminLogatamaController
{
    function index(){
        $peserta =Peserta::where('role','peserta')->get();
        // return "halaman admin logatama dashboard " . $peserta;
        return response("halaman admin logatama dashboard \n\n\n".$peserta, 200)->header('Content-Type', 'text/plain');
    }
    function pengumuman(){
        return 'halaman admin logatama pengumuman';
    }
    function createPengumuman(Request $request){

        $validated = $request->validate([
            'judul' => 'required|string|max:300',
            'deskripsi' => 'required|string|max:1000',
            'tanggal' => 'required|string|max:50',
        ]);

        if ($validated){
            Pengumuman::create([
                'judul' => $request->input('judul'),
                'deskripsi' => $request->input('deskripsi'),
            ]);
            return Pengumuman::all();
        }
    }
    function rekap(){
        return 'halaman admin logatama rekap juara';
    }
}
