<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormPages extends Model
{
    use HasFactory;

    public function form()
    {
        return $this->belongsTo(Form::class, 'form_id', 'id');
    }

    public function questions()
    {
        return $this->hasMany(Question::class, 'form_page_id', 'id');
    }
}
