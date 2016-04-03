var elixir = require('laravel-elixir');
require('laravel-elixir-jade');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.jade({
        baseDir: './resources',
        blade: true,
        dest: '/views/',
        pretty: false,
        search: '**/*.jade',
        src: '/assets/tpls/'
    });
});
