<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker\Factory as Faker;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class SoalFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    // protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = Faker::create('id_ID');
        return [
            'pertanyaan' => $faker->sentence,
            'pilihan' => json_encode([$faker->word,$faker->word,$faker->word,$faker->word,$faker->word]),
            'jawaban' => ['A','B','C','D','E'][rand(0,4)],
            'poin' => 2,
            'images' => ['','http://localhost:5173/resources/assets/beranda/baden-powell.png'][rand(0,1)],
        ];
    }

}



