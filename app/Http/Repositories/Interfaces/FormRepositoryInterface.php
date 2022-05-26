<?php

namespace App\Http\Repositories\Interfaces;

use Illuminate\Support\Collection;

interface FormRepositoryInterface
{
    /**
     * Find All
     * --------------------------------------
     * Get all form data
     *
     * @return \Illuminate\Support\Collection
     */
    public function findAll(): Collection;

    /**
     * Find
     * --------------------------------------
     * Get single form data by ID
     *
     * @return \Illuminate\Support\Collection
     */
    public function find(int $id): Collection;

    /**
     * Find All
     * --------------------------------------
     * Persist single newly form data
     *
     * @return \Illuminate\Support\Collection
     */
    public function store(array $form): Collection;
}
