<?php

namespace App\Http\Services\Interfaces;

use Illuminate\Support\Collection;

interface FormServiceInterface
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
     * Find All
     * --------------------------------------
     * Get all form data
     *
     * @return \Illuminate\Support\Collection
     */
    public function find($id): Collection;
}
