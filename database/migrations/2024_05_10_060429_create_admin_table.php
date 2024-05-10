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
        Schema::create('admin', function (Blueprint $table) {
            $table->id();
            $table->text('username',20);
            $table->string('password', 255)->nullable();
            $table->text('nama')->default('-');
            $table->string('nis', 30)->default('-');
            $table->text('kelas')->default('-');
            $table->string('role', 10)->default('-'); 
            $table->string('email',100)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admin');
    }
};
