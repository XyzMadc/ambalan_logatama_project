<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soal extends Model
{
    use HasFactory;
    protected $fillable = ['pertanyaan', 'pilihan', 'jawaban', 'poin','images','tingkat'];
}
