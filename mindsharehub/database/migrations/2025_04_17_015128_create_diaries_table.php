<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiariesTable extends Migration
{
    public function up(): void
{
    Schema::create('diaries', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->onDelete('cascade');
        $table->string('title');
        $table->text('content')->nullable();
        $table->timestamps();
    });
}


    public function down()
    {
        Schema::dropIfExists('diaries');
    }
}
