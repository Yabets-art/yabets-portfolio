<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::middleware('api')->group(function () {
    // Contact form routes
    Route::post('/contact', [ContactController::class, 'store']);
    
    // Admin routes (you might want to add authentication middleware)
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/contacts', [ContactController::class, 'index']);
        Route::get('/contacts/{id}', [ContactController::class, 'show']);
    });
});

// Health check
Route::get('/health', function () {
    return response()->json(['status' => 'OK', 'timestamp' => now()]);
});