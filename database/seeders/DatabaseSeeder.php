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
        // Peserta::factory(10)->create(['tingkat' =>'penegak']);

        Soal::factory(2)->create(['tingkat'=>'penggalang']);
        // Soal::factory(50)->create(['tingkat'=>'penegak']);
        Peserta::factory()
            ->count(15)
            ->state(function (array $attributes) {
                $school = rand(1, 50);
                $kategori = ['putra', 'putri'];
                $tingkat = 'penegak';
                $tingkatsekolah = 'SMA';
                return [
                    'pangkalan' => "$tingkatsekolah $school Semarang",
                    'username' => $tingkatsekolah . "_" . $school . "_SEMARANG",
                    'role' => 'peserta',
                    'tingkat' => $tingkat,
                    'kategori' => $kategori[intval(rand(0, 1))],
                    'pbb'=> rand(0, 100),
                    'cerdas_cermat'=> rand(0, 100),

                ];
            })
            ->create();
            Peserta::factory()
            ->count(15)
            ->state(function (array $attributes) {
                $school = rand(1, 50);
                $kategori = ['putra', 'putri'];
                $tingkat = 'penggalang';
                $tingkatsekolah = 'SMP';
                return [
                    'pangkalan' => "$tingkatsekolah $school Semarang",
                    'username' => $tingkatsekolah . "_" . $school . "_SEMARANG",
                    'role' => 'peserta',
                    'tingkat' => $tingkat,
                    'kategori' => $kategori[intval(rand(0, 1))],
                    'pbb'=> rand(0, 100),
                    'cerdas_cermat'=> rand(0, 100),

                ];
            })
            ->create();

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
