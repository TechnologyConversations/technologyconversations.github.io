'use strict';

angular.module('assistantWeb', [
  'ngRoute',
//  'myApp.filters',
//  'myApp.services',
//  'myApp.directives',
  'assistantWeb.controllers'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when(
      '/index', {
          title: '',
          templateUrl: 'partials/intro.html',
          controller: 'IntroCtrl'
      }
  );
  $routeProvider.when(
      '/bddAssistant', {
          title: 'Application',
          templateUrl: 'partials/bddAssistant.html',
          controller: 'bddAssistantCtrl'
      }
  );
  $routeProvider.otherwise(
      { redirectTo: '/index' }
  );
}])
.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.title = current.title;
    });
}]);
