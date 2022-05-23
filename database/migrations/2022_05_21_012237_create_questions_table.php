<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->text('question');
            $table->string('type');
            $table->boolean('required');
            $table->bigInteger('answer_id')->unsigned()->nullable();
            $table->unsignedInteger('order');
            $table->bigInteger('form_page_id')->unsigned();
            $table->bigInteger('question_group_id')->unsigned()->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('form_page_id')->references('id')->on('form_pages')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreign('answer_id')->references('id')->on('answers')->nullOnDelete();
            $table->foreign('question_group_id')->references('id')->on('question_groups')->nullOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('questions');
    }
};
