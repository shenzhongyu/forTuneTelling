<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::auth();

Route::get('/home', 'HomeController@index');

/**
 * 引入后台路由文件
 * 2016-04-03 11:31:28
 * @return
 */

foreach(File::allFiles(__DIR__.'/routes') as $partial){
    require_once $partial->getPathname();
}