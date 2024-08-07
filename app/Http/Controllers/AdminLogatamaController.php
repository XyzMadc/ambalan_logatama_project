<?php

namespace App\Http\Controllers;
// namespace App\Http\Controllers\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Peserta;
use App\Models\Faq;
use App\Models\Dokumentasi;
use App\Models\Pengumuman;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminLogatamaController
{
    function index()
    {
        $peserta = Peserta::where('role', 'peserta')->get()->groupBy('tingkat');
        $all_bidang = DB::table('information_schema.columns')
            ->where('table_schema', env('DB_DATABASE'))
            ->where('table_name', 'pesertas')
            ->whereNotIn('column_name', ["id", "team_id", "pangkalan", "username", "password", "role", "tingkat", "kategori", "email", "created_at", "updated_at"])
            ->pluck('COLUMN_NAME')->toArray();
        // return $peserta;
        return Inertia::render('Admin/Dashboard/index', [
            'peserta' => $peserta,
            'semuaBidang' => $all_bidang,
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
                'judul' => $request->input('judul'),
                'deskripsi' => $request->input('deskripsi'),
            ]);
        }
    }
    function soal()
    {
        return Inertia::render('Admin/Soal/index');
    }
    function reviewSoal()
    {
        return Inertia::render('Admin/Soal/ReviewSoal/index');
    }
    function createSoal()
    {
        return Inertia::render('Admin/Soal/CreateSoal/index');
    }
    function rekap()
    {
        $pangkalan = Peserta::where('role', 'peserta')->select('pangkalan', 'kategori', 'team_id')->get();
        $bidang = DB::table('information_schema.columns')
            ->where('table_schema', env('DB_DATABASE'))
            ->where('table_name', 'pesertas')
            ->whereNotIn('column_name', ["id", "team_id", "pangkalan", "username", "password", "role", "tingkat", "kategori", "email", "created_at", "updated_at"])
            ->pluck('COLUMN_NAME');
        // return $pangkalan;
        return Inertia::render('Admin/Rekap/index', ['jumlahPeserta' => $pangkalan, 'bidang' => $bidang]);
    }
    function createRekap(Request $request)
    {
        $team_id = $request->nama_pangkalan;
        $bidang = $request->peringkat;
        $skor = $request->skor_nilai;
        $validated = $request->validate([
            'peringkat' => 'required',
            'nama_pangkalan' => 'required',
            'skor_nilai' => 'required|numeric|min:0|max:100',
        ]);

        if ($validated) {
            $all_bidang = DB::table('information_schema.columns')
                ->where('table_schema', env('DB_DATABASE'))
                ->where('table_name', 'pesertas')
                ->whereNotIn('column_name', ["id", "team_id", "pangkalan", "username", "password", "role", "tingkat", "kategori", "email", "created_at", "updated_at"])
                ->pluck('COLUMN_NAME')->toArray();
            $all_team = Peserta::where('role', 'peserta')->pluck('team_id')->toArray();
            if (in_array($team_id, $all_team)) {
                if (in_array($bidang, $all_bidang)) {
                    Peserta::where('team_id', $team_id)->update([$bidang => $skor]);
                }
                return redirect()->back();
            }
            return redirect()->back();
        }
        return redirect()->back();
    }
    function faq()
    {
        return Inertia::render('Admin/FAQ/index');
    }
    function createFaq(Request $request)
    {
        $validated = $request->validate([
            'pertanyaan' => 'required|string|max:300',
            'jawaban' => 'required|string|max:1000',
        ]);

        if ($validated) {
            Faq::create([
                'pertanyaan' => $request->input('pertanyaan'),
                'jawaban' => $request->input('jawaban'),
            ]);
        }
        return redirect()->back();
    }
    function dokumentasi()
    {
        return Inertia::render('Admin/Dokumentasi/index');
    }
    function createDokumentasi(Request $request)
    {
        $validated = $request->validate([
            'name_file' => 'required|string|max:30',
            'file' => 'required|image|mimes:jpg,png,jpeg|max:300',
        ]);

        if (!$validated) {
            return redirect()->back()->withErrors(['file' => 'File harus berupa gambar!']);
        }

        if ($request->file("file")) {
            $image = $request->file("file");
            $extension = $image->getClientOriginalExtension();
            $newName = "logatama_dokumentasi_" . now()->format('Y_m_d_H.i.s') . '.' . $extension;
            $image->storeAs('dokumentasi', $newName, 'public');
            Dokumentasi::create([
                'path' => '/storage/dokumentasi/' . $newName,
            ]);
        }

        return redirect()->back();
    }
}
