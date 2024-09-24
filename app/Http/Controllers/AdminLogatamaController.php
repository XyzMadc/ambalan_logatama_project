<?php

namespace App\Http\Controllers;
// namespace App\Http\Controllers\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Peserta;
use App\Models\Pengumuman;
use Inertia\Inertia;

class AdminLogatamaController
{
    function index()
    {
        $peserta = Peserta::where('role', 'peserta')->get()->groupBy('tingkat');
        $all_bidang = DB::table('information_schema.columns')
                ->where('table_schema', env('DB_DATABASE'))
                ->where('table_name', 'pesertas')
                ->whereNotIn('column_name', ["id","team_id","pangkalan","username","password","role","tingkat","kategori","email","created_at","updated_at"])
                ->pluck('column_name')->toArray();
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
    function rekap()
    {
        $pangkalan = Peserta::where('role','peserta')->select('pangkalan','kategori','team_id')->get();
        $bidang = DB::table('information_schema.columns')
        ->where('table_schema', env('DB_DATABASE'))
        ->where('table_name', 'pesertas')
        ->whereNotIn('column_name', ["id","team_id","pangkalan","username","password","role","tingkat","kategori","email","created_at","updated_at"])
        ->pluck('column_name');
        // return $pangkalan;
        return Inertia::render('Admin/Rekap/index',['jumlahPeserta'=>$pangkalan,'bidang'=>$bidang]);
    }
    function createRekap(Request $request)
    {
        $team_id=$request->nama_pangkalan;
        $bidang = $request->peringkat;
        $skor = $request->skor_nilai;
        $validated = $request->validate([
            'peringkat' => 'required',
            'nama_pangkalan' => 'required',
            'skor_nilai' => 'required|numeric|min:0|max:100',
        ]);

        if ($validated){
            $all_bidang = DB::table('information_schema.columns')
                ->where('table_schema', env('DB_DATABASE'))
                ->where('table_name', 'pesertas')
                ->whereNotIn('column_name', ["id","team_id","pangkalan","username","password","role","tingkat","kategori","email","created_at","updated_at"])
                ->pluck('column_name')->toArray();
            $all_team = Peserta::where('role','peserta')->pluck('team_id')->toArray();
            if (in_array($team_id, $all_team)){
                if (in_array($bidang, $all_bidang)){
                    Peserta::where('team_id',$team_id)->update([$bidang=>$skor]);
                }
                return redirect()->back();
            }
            return redirect()->back();
        }
        return redirect()->back();
    }
}
