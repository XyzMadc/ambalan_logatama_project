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
        Schema::create('pesertas', function (Blueprint $table) {
            $table->id();
            $table->uuid('team_id');
            $table->string('pangkalan');
            $table->string('username');
            $table->string('password');
            $table->string('role');
            $table->string('tingkat');
            $table->string('kategori');
            $table->string('email')->unique();
            $table->integer('lctp')->nullable()->default(0);
            $table->integer('pbb')->nullable()->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pesertas');
    }
};
