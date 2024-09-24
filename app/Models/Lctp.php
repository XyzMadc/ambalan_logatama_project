<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lctp extends Model
{
    use HasFactory;
    protected $fillable = ['team_id', 'mulai', 'jawaban', 'status','berakhir','tingkat'];
}
