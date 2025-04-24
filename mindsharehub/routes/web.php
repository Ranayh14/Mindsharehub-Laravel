<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DiaryController;
use Inertia\Inertia;

Route::get('/', fn() => Inertia::render('Home'));
Route::get('/help', fn() => Inertia::render('Help'));
Route::get('/about', fn() => Inertia::render('AboutUs'));

Route::middleware('guest')->group(function () {
    Route::get('/register', [PageController::class, 'showRegister'])->name('register');
    Route::post('/register', [AuthController::class, 'register'])->name('register.attempt');

    Route::get('/login', [PageController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login'])->name('login.attempt');
});

Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::middleware(['auth', 'web'])->group(function(){
    Route::get('/dashboard', [PageController::class, 'showDashboard'])->name('dashboard');
    Route::get('/admin/dashboard', [PageController::class, 'showAdminDashboard'])->name('admin.dashboard');

    // Diary routes
    Route::get('/diary', [PageController::class, 'showDiary'])->name('diary');

    // API Routes for Diary
    Route::prefix('api')->group(function() {
        Route::get('/diaries', [DiaryController::class, 'index']);
        Route::post('/diaries', [DiaryController::class, 'store']);
        Route::put('/diaries/{diary}', [DiaryController::class, 'update']);
        Route::delete('/diaries/{diary}', [DiaryController::class, 'destroy']);
    });
});
