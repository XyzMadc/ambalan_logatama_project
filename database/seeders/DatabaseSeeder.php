<?php

namespace Database\Seeders;

use App\Models\Peserta;
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
        // Peserta::factory(36)->create();
        $categories = [
            ['tingkat' => 'penegak', 'kategori' => 'putra'],
            ['tingkat' => 'penegak', 'kategori' => 'putri'],
            ['tingkat' => 'penggalang', 'kategori' => 'putra'],
            ['tingkat' => 'penggalang', 'kategori' => 'putri'],
        ];

        foreach ($categories as $category) {
            foreach (['lctp', 'pbb', 'cerdas_cermat'] as $field) {
                Peserta::factory()
                    ->count(3)
                    ->state(function (array $attributes) use ($category, $field) {
                        return [
                            'tingkat' => $category['tingkat'],
                            'kategori' => $category['kategori'],
                            $field => rand(0, 100),
                        ];
                    })
                    ->create();
            }
        }
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
