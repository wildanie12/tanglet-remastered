<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    use HasFactory;

    public function formPages()
    {
        return $this->hasMany(FormPages::class, 'form_id', 'id');
    }
}
