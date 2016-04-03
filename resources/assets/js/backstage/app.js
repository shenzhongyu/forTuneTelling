'use strict'

var backstageApp = angular.module('backstage',[
    'ui.router'
]);

module.exports.backstageApp = backstageApp;
module.exports.controllers = angular.module('controllers',[]);
module.exports.resServers = angular.module('resServers',[]);

require('./route.configs.js');