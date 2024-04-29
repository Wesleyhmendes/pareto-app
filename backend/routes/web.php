<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/teste', [UserController::class, 'show']);

Route::post('/login', [UserController::class, 'login']);