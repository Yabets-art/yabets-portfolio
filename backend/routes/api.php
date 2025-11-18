<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HiringRequestController;

Route::get('/hiring-requests', [HiringRequestController::class, 'index']);
Route::post('/hiring-requests', [HiringRequestController::class, 'store']);
Route::post('/hiring-requests/{id}/accept', [HiringRequestController::class, 'accept']);

use App\Http\Controllers\ContactController;

Route::get('/contacts', [ContactController::class, 'index']);
Route::post('/contacts', [ContactController::class, 'store']);
Route::post('/contacts/{id}/reply', [ContactController::class, 'reply']);
