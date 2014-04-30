'use strict';


// Declare app level module which depends on filters, and services
angular.module('assistantWeb', [
  'ngRoute',
//  'myApp.filters',
//  'myApp.services',
//  'myApp.directives',
  'assistantWeb.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {templateUrl: 'partials/intro.html', controller: 'IntroCtrl'});
  $routeProvider.when('/what_is_BDD', {templateUrl: 'partials/what_is_BDD.html', controller: 'WhatIsBDDCtrl'});
  $routeProvider.when('/screenshots', {templateUrl: 'partials/screenshots.html', controller: 'ScreenshotsCtrl'});
  $routeProvider.otherwise({redirectTo: '/index'});
}]);
