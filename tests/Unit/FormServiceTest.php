<?php

namespace Tests\Unit;

use App\Http\Repositories\Interfaces\FormRepositoryInterface;
use App\Http\Services\FormService;
use Mockery;
use Mockery\MockInterface;
use PHPUnit\Framework\TestCase;

class FormServiceTest extends TestCase
{

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_example()
    {
        Mockery::mock(FormRepositoryInterface::class, function (MockInterface $mock) {
            $mock->shouldReceive()
        });
        $formService = new FormService('findAll');
        
        $this->assertTrue(true);
    }
}
