<?php

//use Illuminate\Http\Request;

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

/**
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

*/

//Route::get('/question', 'QuestionController@index');
// get questions
Route::apiResource('/question', 'QuestionController');
// get categories
Route::apiResource('/category', 'CategoryController');
// get replies
Route::apiResource('/question/{question}/reply', 'ReplyController');



