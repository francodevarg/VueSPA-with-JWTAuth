<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'auth'],function($router){
    Route::post('login','AuthController@login');
    Route::post('logout','AuthController@logout');
    Route::post('refresh','AuthController@refresh');
    Route::post('me','AuthController@me');
});

Route::group(['middleware' => 'jwt.auth'], function($router){
    Route::get('customers','CustomersController@all');
    Route::get('customers/{id}','CustomersController@get');
    Route::post('customers/new','CustomersController@new');
});