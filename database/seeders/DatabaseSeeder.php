<?php

namespace Database\Seeders;

use App\Models\Peserta;
use App\Models\Soal;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    protected static ?string $password;

    public function run(): void
    {
        foreach (range(1, 20) as $i) {
            Peserta::factory()
                ->state(function (array $attributes) use ($i) {
                    $school = rand(1, 50);
                    $kategori = ['putra', 'putri'];
                    $tingkat = 'penggalang';
                    $tingkatsekolah = 'SMP';
                    return [
                        'pangkalan' => "$tingkatsekolah $school Semarang",
                        'username' => "PENGGALANG_$i",
                        'role' => 'peserta',
                        'tingkat' => $tingkat,
                        'kategori' => $kategori[intval(rand(0, 1))],
                        // 'pbb' => null,
                        // 'cerdas_cermat' => null,
                    ];
                })
                ->create();
        }

        foreach (range(1, 20) as $i) {
            Peserta::factory()
                ->state(function (array $attributes) use ($i) {
                    $school = rand(1, 50);
                    $kategori = ['putra', 'putri'];
                    $tingkat = 'penegak';
                    $tingkatsekolah = 'SMA';
                    return [
                        'pangkalan' => "$tingkatsekolah $school Semarang",
                        'username' => "PENEGAK_$i",
                        'role' => 'peserta',
                        'tingkat' => $tingkat,
                        'kategori' => $kategori[intval(rand(0, 1))],
                        // 'pbb' => null,
                        // 'cerdas_cermat' => null,
                    ];
                })
                ->create();
        }


        // Soal::factory(2)->create(['tingkat'=>'penggalang']);
        // Soal::factory(50)->create(['tingkat'=>'penegak']);
       
        

        Peserta::factory()->create([
            'team_id' => Str::uuid(),
            'pangkalan' => 'SMKN 7 Semarang',
            'username' => 'admin',
            'kategori' => 'admin',
            'tingkat' => 'admin',
            'role' => 'admin',
            'email' => 'ambalansoekmasmkn7@gmail.com',
            'password' => static::$password ??= Hash::make('password')
        ]);
    }
}
