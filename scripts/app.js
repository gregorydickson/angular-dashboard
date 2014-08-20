'use strict';
//need some references on the window for use in highcharts click events.
var days;
var daysKw;
/**
* This function takes a 30 day set of intervals and converts them
* for display in the four Highcharts, a 30 day demand profile
* a 30 day heatmap, and two one day
*
* @method makeEnergy
* @param {Object} energy The object returned by angular from
*  $http with the 30 days of intervals
* @return {Object} Returns a Energy object with properties
* for the data
*/
function makeEnergy(energy){
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
    Energy.allkwh = [];  //for display in the Load Profile 30 days
    Energy.alltemps = []; //to display temps in the 
    Energy.kwFactor = energy.data.kwfactor;
    Energy.intervals = [];
    Energy.intervalTimes = [];
    //calculate the heatmap data in a three dimentional array
    var element = [];
    //create a javascript millisecond time that will be midnight UTC
    //so that we can create a set of 15 minute intervals from midnight
    var time = 21600000; 
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
        if(day.temps !== undefined){
            $.each(day.temps,function (index,tempInterval){
                dateInMilliseconds = Date.parse(day.date);
                //calculates the datetime in milliseconds
                //have to add the number based on the 96 time intervals per day
                millisecondsToAdd = 900000 * (1+index);
                totalMilliseconds = dateInMilliseconds + millisecondsToAdd;
                
                element = [totalMilliseconds, tempInterval];
                Energy.alltemps.push(element);
            });
        }
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
};
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

App.factory('ConfigService', function ($http) {
  var configServiceFactory = {};
  configServiceFactory.getConfig = function () {
    console.log("SID is " + SID);
    return $http({
        url: 'config.php',
        method: "POST",
        data: JSON.stringify({function:"masterconfig",
                            SID:SID,
                            application:"LPDashboard"
        }),
        headers: {'Content-Type': 'application/json'},
        cache: true
    });
  };
  configServiceFactory.updateView = function (view, meters, isdefault) {
    $httpDefaultCache.remove('config.php');
    return $http({
        url: 'updateview.php',
        method: "POST",
        data: JSON.stringify({function:"updateview",
                            SID:SID,
                            page: "LP",
                            name: view,
                            meters: meters,
                            default: isdefault,
                            application:"LPDashboard"
        }),
        headers: {'Content-Type': 'application/json'},
        cache: false
    });

  };
  configServiceFactory.deleteView = function (view) {
    $httpDefaultCache.remove('config.php');
    return $http({
        url: 'deleteview.php',
        method: "POST",
        data: JSON.stringify({function:"deleteview",
                            SID:SID,
                            page: "LP",
                            name: view,
                            application:"LPDashboard"
        }),
        headers: {'Content-Type': 'application/json'},
        cache: false
    });

  };
  configServiceFactory.createView = function (view, meters, isdefault) {
    $httpDefaultCache.remove('config.php');
    return $http({
        url: 'createview.php',
        method: "POST",
        data: JSON.stringify({function:"createview",
                            SID:SID,
                            page: "LP",
                            name: view,
                            meters: meters,
                            default: isdefault,
                            application:"LPDashboard"
        }),
        headers: {'Content-Type': 'application/json'},
        cache: false
    });

  }

  return configServiceFactory;
});

App.factory('IntervalsDataService', function ($http,ConfigService) {
    var intervalsDataServiceFactory = {};
    intervalsDataServiceFactory.getDefaultView = function () {
    return ConfigService.getConfig()
        .then(function(config){
            console.log("facilites returned in interval data service" + config.data);
            
            var LPPage = _.find(config.data.pages,{'name':'LP'} );
            var defaultView = _.find(LPPage.views, {'default':true});
            var today = new Date();
            return $http({
                url:'data.php',
                method: "POST",
                data: JSON.stringify({
                    function:"intervals",
                    meters: defaultView.meters,
                    enddate: today.toLocaleDateString("en-US"),
                    timeperiod:"last30days",
                    binsize:"15",
                    SID:SID,
                    application:"LPDashboard"
                }),
                headers: {'Content-Type': 'application/json'}
            });
        });
    };

    intervalsDataServiceFactory.refreshView = function (meters) {
        var today = new Date();
        return $http({
            url:'data.php',
            method: "POST",
            data: JSON.stringify({
                function:"intervals",
                meters: meters,
                enddate: today.toLocaleDateString("en-US"),
                timeperiod:"last30days",
                binsize:"15",
                SID:SID,
                application:"LPDashboard"
            }),
            headers: {'Content-Type': 'application/json'}
        });
    };

  return intervalsDataServiceFactory;
});

App.factory('EnergyAsyncService', function(IntervalsDataService) {
    var factory = {};
    factory.defaultView = function () {
        return IntervalsDataService.getDefaultView()
            .then(makeEnergy);
    };
    factory.updateView = function (meters) {
        console.log("Energy Async Service Update View");
        return IntervalsDataService.refreshView(meters)
            .then(makeEnergy);
    }
    return factory;
});
/**
* Used by the two controllers to communicate changes in the 
* list of meters
* 
*/
App.factory('MetersMessageBus', function($rootScope) {
    var bus = {};
    
    bus.message = '';

    bus.handleMessage = function(m) {
        console.log("handling message: " + m);
        this.message = m;
        this.broadcastItem();
    };

    bus.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
    };

    return bus;
});




