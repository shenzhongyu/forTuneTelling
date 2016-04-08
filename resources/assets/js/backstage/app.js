'use strict';

var backstageApp = angular.module('backstage',[
    'ngStorage',
    'ui.router'
]);

module.exports.backstageApp = backstageApp;
module.exports.controllers = angular.module('controllers',[]);
module.exports.directives = angular.module('directives',[]);
module.exports.resServers = angular.module('resServers',[]);

require('./route.configs.js');
require('./directives/ui-toggleclass.js');