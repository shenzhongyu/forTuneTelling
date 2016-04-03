<?php
/**
 * The Routes of backStage
 * 2016-04-03 11:41:34
 */
Route::group(['prefix' => 'backstage','namespace' => 'Admin'],function(){

    Route::get('/views/{name}',function($name){
        return view($name);
    });

    Route::any('/{path?}',function(){
        return view('admin.layouts.main');
    })->where('path','.+');

});