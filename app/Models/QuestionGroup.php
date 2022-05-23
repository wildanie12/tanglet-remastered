<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionGroup extends Model
{
    use HasFactory;

    public function questions()
    {
        return $this->hasMany(Question::class, 'question_group_id', 'id');
    }

    public function answerItemTriggers()
    {
        return $this->hasMany(Answeritem::class, 'trigger_question_group_id', 'id');
    }
}
