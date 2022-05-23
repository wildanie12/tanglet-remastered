<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Form>
 */
class FormFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(),
            'logo' => 'https://source.unsplash.com/720x480/?coffee',
            'description' => '<p>' . collect($this->faker->paragraphs())->join('</p><p>') . '</p>',
            'cover_file' => 'https://source.unsplash.com/480x480/?logo',
            'status' => ['PUBLISHED', 'DRAFT'][rand(0, 1)],
        ];
    }
}
