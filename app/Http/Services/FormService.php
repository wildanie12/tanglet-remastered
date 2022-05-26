<?php
namespace App\Http\Services;

use App\Http\Repositories\Interfaces\FormRepositoryInterface;
use App\Http\Services\Interfaces\FormServiceInterface;
use Illuminate\Support\Collection;

class FormService implements FormServiceInterface
{
    public function __construct(
        protected FormRepositoryInterface $formRepository
    ){}
    
    /**
     * Find All
     * --------------------------------------
     * Get all form data
     *
     * @return \Illuminate\Support\Collection
     */
    public function findAll(): Collection
    {
        $forms = $this->formRepository->findAll();
        return $forms;
    }
    /**
     * Find All
     * --------------------------------------
     * Get all form data
     *
     * @return \Illuminate\Support\Collection
     */
    public function find($id): Collection
    {
        $form = $this->formRepository->find($id);
        return $form;
    }
}