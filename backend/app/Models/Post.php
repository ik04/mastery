<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        "title",
        "description",
        "profile_pic",
        "uuid",
        "username",
        "date",
        "time",
    ];
}

// ? ask armaan fr better schema n use of joins