<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
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
Route::get('/user',[AuthController::class,'getData']);
Route::get('/profile',[ProfileController::class,'getProfileData']);
Route::post('/result',[ProfileController::class,'searchResult']);
Route::get("/get-all-posts",[PostController::class,'getAllPosts']);

// Route::get("/index",[PostController::class,'index']);

// * auth routes
Route::group(['middleware' =>['auth:sanctum']],function(){
    Route::post("/isLog", function () {  
        return response()->noContent();
    });
    Route::post('/search',[ProfileController::class,'searchUser']);
    Route::post("/logout",[AuthController::class,'logout']);
    Route::post("/profile",[ProfileController::class,'createProfile']);
    Route::post("/create-post",[PostController::class,'createPost']);
    Route::post('/profileData',[ProfileController::class,'checkProfile']);
    // /profile-data kebab case
});

// TODO: make route for creating post with schema