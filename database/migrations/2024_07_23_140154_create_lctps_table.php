<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lctps', function (Blueprint $table) {
            $table->id();
            $table->uuid('team_id')->nullable();
            $table->text('jawaban')->nullable();
            $table->string('tingkat')->nullable();
            $table->timestamp('mulai')->nullable()->default('2024-09-17 12.00');
            $table->timestamp('berakhir')->nullable()->default('2024-12-17 14.00');
            $table->integer('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lctps');
    }
};
