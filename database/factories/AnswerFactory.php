<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Answer>
 */
class AnswerFactory extends Factory
{
    /**
     * Define the model's default state.
     * Answer Types: TEXT, NUMBER, DROPDOWN, RADIO, CHECKBOX
     * RADIO_CUSTOM_TEXT, CHECKBOX_CUSTOM_TEXT, DATASET
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $type = [
            'TEXT',
            'NUMBER',
            'DROPDOWN',
            'RADIO',
            'CHECKBOX',
            'RADIO_CUSTOM_TEXT',
            'CHECKBOX_CUSTOM_TEXT',
            'DATASET',
        ][rand(0, 6)];
        $placeholder = '';
        if ($type != 'DROPDOWN' && $type != 'RADIO' && $type != 'CHECKBOX' && $type != 'DATASET') {
            $placeholder = $this->faker->sentence();
        }
        return [
            'type' => $type,
            'placeholder' => $placeholder,
        ];
    }
}
