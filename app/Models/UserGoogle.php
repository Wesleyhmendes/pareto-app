<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserGoogle extends Model
{
    use HasFactory;
    protected $table = 'user_googles';
    protected $fillable = ['id', 'name', 'email', 'email_verified'];
}
