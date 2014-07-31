'use strict';
//need some references on the window for use in highcharts click events.
var days;
var daysKw;
// Declare app level module which depends on filters, and services
var App = angular.module('myApp', ['myApp.directives', 'ngRoute','highcharts-ng','ui.tree']).
config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'views/home.html',
            controller: 'loadProfileController'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);
App.factory('ViewsService', function ($http) {
  return function () {
    return $http.post('views.php');
  };
})
App.factory('FacilitiesService', function ($http) {
  return function () {
    return $http.post('facilities.php');
  };
})
App.factory('IntervalsDataService', function ($http,FacilitiesService) {
  return function () {
    return FacilitiesService()
        .then(function(facilities){
            console.log("facilites returned in interval data service" + facilities.data);
            //get the 
            return $http.post('data.php');
        });
        
  };
})

App.factory('EnergyAsyncService', function(IntervalsDataService) {
    return function () {
        return IntervalsDataService()
          .then(function (energy) {          
            var Energy = {};
            Energy.kwhMonth = [];
            Energy.kwhHeatData = [];
            Energy.days = energy.data.days;
            Energy.daysKw = [];
            Energy.maxValue = 1.1;
            Energy.minValue = 1000.1
            Energy.minKwValue = 1000.1;
            Energy.maxKwValue = 1.1;
            Energy.deciles = energy.data.deciles;
            Energy.percentDeciles = [];
            Energy.intervalDates = [];
            Energy.allkwh = [];
            Energy.kwFactor = energy.data.kwfactor;
            Energy.intervals = [];
            Energy.intervalTimes = [];
            //calculate the heatmap data
            var element = [];
            var time = 21600000; //create a javascript millisecond time that will be midnight
            var kwhValue = 0;
            for (var i = 0; i <= 95; i++) {
                Energy.intervals.push(i);
                var timeOfDay = new Date(time);
                var minutes = timeOfDay.getMinutes().toString();
                if (minutes.length < 2) {minutes = minutes + "0"};
                Energy.intervalTimes.push(timeOfDay.getHours() + ":" + minutes);
                
                $.each(Energy.days, function(index, day){
                    if(Energy.days[index].values[i] !== undefined ) {
                        kwhValue = (Energy.days[index].values[i] * Energy.kwFactor);
                    }
                    
                    element = [i, new Date(Energy.days[index].date).getTime(), kwhValue ];
                    Energy.kwhHeatData.push(element);
                });
                time = time + 900000; //add 15 minutes to time in milliseconds
            };
            //calculate the days in kw
            var dateInMilliseconds;
            var date;
            var totalMilliseconds;
            var millisecondsToAdd;
            $.each(Energy.days, function(index, day){
                Energy.intervalDates.push(Date.parse(day.date));
                var valuesInKw = [];
                $.each(day.values, function (index,the96){
                    // multiply the values by kwfactor
                    valuesInKw.push(the96 * Energy.kwFactor)
                    dateInMilliseconds = Date.parse(day.date);
                    //calculates the datetime in milliseconds
                    //have to add the number based on the 96 time intervals per day
                    millisecondsToAdd = 900000 * (1+index);
                    totalMilliseconds = dateInMilliseconds + millisecondsToAdd;
                    
                    element = [totalMilliseconds, the96];
                    Energy.allkwh.push(element);
                    //while we are in the loop, get the max and min values
                    //for the y axis display
                    if (the96 > Energy.maxValue) {Energy.maxValue = the96};

                    if ((the96 < Energy.minValue) && (the96 != 0)) {Energy.minValue = the96};
                });
                var aDayInKw = {"date":day.date, "values":valuesInKw};
                Energy.daysKw.push(aDayInKw);
            });
            Energy.maxKwValue = Energy.maxValue * Energy.kwFactor;
            Energy.minKwValue = Energy.minValue * Energy.kwFactor;
            
            var aDecile = 0.0;
            var maxMinusMin = Energy.maxValue - Energy.minValue;

            $.each(Energy.deciles, function(index, decile){
                aDecile = (Energy.deciles[index] - Energy.minValue) / maxMinusMin;
                Energy.percentDeciles[index] = aDecile;
            });

            return Energy;
          });
    };
})



