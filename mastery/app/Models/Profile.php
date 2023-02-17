<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'image',
        'name',
        'email',
        'age',
        'username',
        'Bio',
        'profile_created'
    ];

    
}