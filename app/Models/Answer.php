<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    public function answer()
    {
        return $this->hasOne(Question::class, 'answer_id', 'id');
    }

    public function answerItem()
    {
        return $this->hasMany(AnswerItem::class, 'answer_id', 'id');
    }
}
