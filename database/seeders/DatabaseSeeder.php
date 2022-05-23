<?php

namespace Database\Seeders;

use App\Models\Answer;
use App\Models\AnswerItem;
use App\Models\Form;
use App\Models\FormPages;
use App\Models\Question;
use App\Models\QuestionItem;
use Database\Factories\AnswerItemFactory;
use Database\Factories\QuestionFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // if (
        //     $answerType == 'DROPDOWN' ||
        //     $answerType == 'CHECKBOX' ||
        //     $answerType == 'RADIO' ||
        //     $answerType == 'RADIO_CUSTOM_TEXT' ||
        //     $answerType == 'CHECKBOX_CUSTOM_TEXT'
        // ) {
        //     // Add Answer Items
        //     $answer);
        // }
        for ($i = 0; $i < 2; $i++) {
            // Answer
            $answer = Answer::factory()
                ->has(
                    AnswerItem::factory()
                        ->count(rand(2, 4))
                        ->state(fn ($definition) => [
                            'is_custom_input_trigger' => [true, false][rand(0, 1)]
                        ])
                );
            $answerType = $answer->definition()['type'];


            // Form Pages
            $formPages = FormPages::factory()
                ->count(rand(1, 3))
                ->sequence(fn ($sequence) => [ 'order' => $sequence->index+1 ])
                ->has(
                    Question::factory()
                        ->sequence(fn ($sequence) => [
                            'order' => $sequence->index+1
                        ])
                        ->for($answer, 'answer')
                        ->has(
                            QuestionItem::factory()
                                ->count(rand(0, 5))
                                ->sequence(fn ($sequence) => [ 'order' => $sequence->index+1 ])
                        )
                );

            // Form
            $form = Form::factory()
                ->has($formPages, 'formPages')
                ->create();
        }
    }
}
