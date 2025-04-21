<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Buat 10 user dari factory
        User::factory(10)->create();

        // Tambah 1 user manual
        User::create([
            'email' => 'lunee202@gmail.com',
            'password' => Hash::make('password123'), // Ganti sesuai kebutuhan
        ]);
    }
}
