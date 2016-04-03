var backstageApp = require('./app.js').backstageApp;
backstageApp.run(function($rootScope,$state,$stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});