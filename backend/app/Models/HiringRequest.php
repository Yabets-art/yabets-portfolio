<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HiringRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'email', 'company', 'role', 'budget', 'message', 'status', 'accepted_at'
    ];

    protected $casts = [
        'accepted_at' => 'datetime',
    ];
}
