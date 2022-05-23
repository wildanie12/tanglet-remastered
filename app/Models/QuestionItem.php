<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionItem extends Model
{
    use HasFactory;

    public function question()
    {
        return $this->belongsTo(Question::class, 'question_id', 'id');
    }

    public function answer()
    {
        return $this->belognsTo(Answer::class, 'answer_id', 'id');
    }
}
