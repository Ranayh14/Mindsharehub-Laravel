<?php

namespace App\Http\Controllers;

use Inertia\Inertia; // Pastikan untuk mengimpor Inertia
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function showLogin()
    {
        return Inertia::render('Auth/Login');  // Render halaman Login menggunakan InertiaJS
    }

    public function showRegister()
    {
        return Inertia::render('Auth/Register');  // Render halaman Register menggunakan InertiaJS
    }

    public function showDashboard()
    {
        return Inertia::render('Dashboard/User');  // Render halaman User Dashboard menggunakan InertiaJS
    }

    public function showAdminDashboard()
    {
        return Inertia::render('Dashboard/Admin');  // Render halaman Admin Dashboard menggunakan InertiaJS
    }

    public function showDiary()
    {
        return Inertia::render('Diary'); // Render halaman Diary menggunakan InertiaJS
    }
}