'use strict';
// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.directives', 'oci.treeview', 'ngRoute', 'uiSlider', 'socket-io', 'ngGrid', 'ngRoute', 'ngResource']).
config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
/*        $routeProvider.
        when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardController'
        }).
        otherwise({
            redirectTo: '/'
        });*/
    }
]);