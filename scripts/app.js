'use strict';
// Declare app level module which depends on filters, and services
var App = angular.module('myApp', ['myApp.directives', 'ngRoute','highcharts-ng','ui.tree']).
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
 
  
App.factory('IntervalsService', function ($http) {
  return function () {

    return $http.get('data.js');
  };
})

App.factory('KwhMonth', function(IntervalsService) {
    //a service to get the data
    // now just gets the object from data.js
    
    return function () {
    $log.log('taskA start')
    var kwhMonth;
    var kwhHeatData;
    var days = [];
    var dayskw;
    var minKwValue;
    var maxKwValue;
    var deciles = [];
    var intervalDates = [];
    return common()
      .then(function () {
        // Do something
        return 'taskA done';
      });
  };
    return allkwh;
})


App.service('KwhMonth', function() {
    //a service to get the data
    // now just gets the object from data.js

    return allkwh;
})
App.service('KwhHeatData', function() {
    //a service to get the data
    // now just gets the object from data.js

    return kwhHeatData;
})
