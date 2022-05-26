<?php

namespace App\Http\Repositories;

use App\Http\Repositories\Interfaces\FormRepositoryInterface;
use App\Models\Form;
use Illuminate\Support\Collection;

class EloquentFormRepository implements FormRepositoryInterface
{
    /**
     * Find All
     * --------------------------------------
     * Get all form data
     *
     * @return \Illuminate\Support\Collection
     */
    public function findAll(): Collection
    {
        return Form::all();
    }

    /**
     * Find
     * --------------------------------------
     * Get single form data by ID
     *
     * @return \Illuminate\Support\Collection
     */
    public function find(int $id): Collection
    {
        return collect();
    }

    /**
     * Find All
     * --------------------------------------
     * Persist single newly form data
     *
     * @return \Illuminate\Support\Collection
     */
    public function store(array $form): Collection
    {
        return collect();
    }
}
