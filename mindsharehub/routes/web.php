<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});
Route::get('/faq', function () {
    return view('help');
});
Route::get('/about', function () {
    return view('about');
});

