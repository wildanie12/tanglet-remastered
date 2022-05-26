<?php

namespace App\Providers;

use App\Http\Repositories\EloquentFormRepository;
use App\Http\Repositories\Interfaces\FormRepositoryInterface;
use App\Http\Services\FormService;
use App\Http\Services\Interfaces\FormServiceInterface;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(FormRepositoryInterface::class, EloquentFormRepository::class);
        $this->app->bind(FormServiceInterface::class, FormService::class);
    }
}
