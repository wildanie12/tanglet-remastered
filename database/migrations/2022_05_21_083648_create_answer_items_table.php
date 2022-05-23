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
        Schema::create('answer_items', function (Blueprint $table) {
            $table->id();
            $table->text('answer');
            $table->bigInteger('answer_id')->unsigned();
            $table->boolean('is_custom_input_trigger');
            $table->bigInteger('trigger_question_group_id')->unsigned()->nullable();
            $table->timestamps();
            $table->foreign('trigger_question_group_id')->references('id')->on('question_groups')->cascadeOnUpdate()->nullOnDelete();
            $table->foreign('answer_id')->references('id')->on('answers')->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void 
     */
    public function down()
    {
        Schema::dropIfExists('answer_items');
    }
};
