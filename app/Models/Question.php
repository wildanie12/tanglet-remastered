<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    public function formPage()
    {
        return $this->belongsTo(FormPages::class, 'form_page_id', 'id');
    }

    public function questionItems()
    {
        return $this->hasMany(Question::class, 'question_id', 'id');
    }

    public function answer()
    {
        return $this->belongsTo(Answer::class, 'answer_id', 'id');
    }

    public function questionGroup()
    {
        return $this->belongsTo(QuestionGroup::class, 'question_group_id', 'id');
    }
}
