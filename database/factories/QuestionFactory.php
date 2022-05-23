<?php

namespace Database\Factories;

use App\Models\Answer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Question>
 */
class QuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     * Question Types: MULTIPLE, SINGLE
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $type = [
            'MULTIPLE',
            'SINGLE',
        ][rand(0, 1)];

        return [
            'question' => $this->faker->sentence() . '?',
            'type' => $type,
            'required' => $this->faker->boolean(70),
        ];
    }
}
