<?php

use App\Http\Controllers\MusicController;
use Illuminate\Support\Facades\Route;

Route::post('/music/{music}/user/{user}',  [MusicController::class, 'associateUser'])
->where('music', '[0-9]+')
->where('user', '[0-9]+');

Route::get('music-users',  [MusicController::class, 'getMusicUsers']);
