'use strict';

angular.module('assistantWeb', [
        'ui.bootstrap',
        'ngRoute',
//  'myApp.filters',
//  'myApp.services',
        'myApp.directives',
        'assistantWeb.controllers'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when(
            '/index', {
                title: '',
                templateUrl: 'partials/intro.html',
                controller: 'IntroCtrl'
            }
        );
        $routeProvider.when(
            '/page/:name', {
                templateUrl: function (params) {
                    return 'partials/' + params.name + '.html';
                },
                controller: 'pageCtrl'
            }
        );
        $routeProvider.otherwise(
            { redirectTo: '/index' }
        );
    }])
    .run(['$location', '$rootScope', function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.title;
        });
    }]);
