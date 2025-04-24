<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DiaryController;

// Diary routes
Route::middleware('auth:sanctum')->group(function() {
    Route::apiResource('diaries', DiaryController::class);
});
