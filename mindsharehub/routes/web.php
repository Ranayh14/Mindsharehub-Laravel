<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn() => Inertia::render('Home'));
Route::get('/help', fn() => Inertia::render('Help'));
Route::get('/about', fn() => Inertia::render('AboutUs'));