<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::get('/user',[AuthController::class,'getdata']);
Route::get('/profile',[ProfileController::class,'get_profile_data']);

Route::group(['middleware' =>['auth:sanctum']],function(){
    Route::post('/search',[ProfileController::class,'search_user']);
    Route::post("/logout",[AuthController::class,'logout']);
    Route::post("/profile",[ProfileController::class,'create_profile']);
    Route::post('/islog',[AuthController::class,'login_token_check']);
    Route::post('/profileData',[ProfileController::class,'check_profile']);
});