'use strict';
// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.directives', 'ngRoute','ui.tree']).
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

myApp.service('Energy', function() {
    //a service to get the data
    // now just gets the object from data.js

    return bigObject;
})
myApp.service('KwhMonth', function() {
    //a service to get the data
    // now just gets the object from data.js

    return allkwh;
})
myApp.service('KwhHeatData', function() {
    //a service to get the data
    // now just gets the object from data.js

    return kwhHeatData;
})
