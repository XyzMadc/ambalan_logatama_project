<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class PesertaFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        // $school = rand(1, 50);
        // $acak = (int)rand(0, 1);
        // $kategori = ['putra', 'putri'];
        // $tingkat = ['penegak', 'penggalang'][$acak];
        // $tingkatsekolah = ['SMA', 'SMP'][$acak];

        return [
            'team_id' => Str::uuid(),
            // 'pangkalan' => "$tingkatsekolah $school Semarang",
            // 'username' => $tingkatsekolah . "_" . $school . "_SEMARANG",
            'role' => 'peserta',
            // 'tingkat' => $tingkat,
            // 'kategori' => $kategori[intval(rand(0, 1))],
            'lctp' => 0,
            'pbb' => 0,
            'cerdas_cermat' => 0,
            'email' => $this->faker->unique()->safeEmail(),
            'password' => static::$password ??= Hash::make('password'),
        ];
    }

}
