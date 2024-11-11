<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

// Route::get('/', function () {
//     return inertia('Home');
// });

//easier way to  define routes
Route::inertia('/', 'Home');
Route::inertia('/h', 'clothes/baju');

Route::resource('/post', PostController::class);
