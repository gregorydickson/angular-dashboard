'use strict';
// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.directives', 'ngRoute', 'uiSlider', 'ngGrid', 'ngRoute', 'ngResource', 'highcharts-ng']).
config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeController'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);