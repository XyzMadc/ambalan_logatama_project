<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Peserta extends Authenticatable
{
    use HasFactory;
    protected $fillable = ['pangkalan', 'email', 'password', 'role'];

    protected $hidden = ['password'];
    protected $table = 'pesertas';
    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }
}
