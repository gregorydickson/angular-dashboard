'use strict';
App.controller('loadProfileController', function($scope,$rootScope, EnergyAsyncService) {
    
        EnergyAsyncService().then(function (Energy) {

            //scope for kwh 30 days, first chart
            $scope.kwh = Energy.allkwh;
             //scope for heatmap, second chart
            $rootScope.deciles = Energy.percentDeciles;
            $rootScope.minKwValue = Energy.minKwValue;
            $rootScope.maxKwValue = Energy.maxKwValue;
            $rootScope.intervals = Energy.intervals;
            $rootScope.intervalDates = Energy.intervalDates;
            $rootScope.intervalTimes = Energy.intervalTimes;
            $scope.kwhheatdata = Energy.kwhHeatData;

            //scope for daily profile, third chart
            var kwhDay = {};
            kwhDay.values = Energy.days[0].values;
            kwhDay.date = Energy.daysKw[0].date;
            kwhDay.intervalTimes = Energy.intervalTimes;
            $scope.dailyProfileData = kwhDay;
            //need the data in a window variable for the click event
            days = Energy.days;
            //fourth chart
            var kwDay = {};
            kwDay.values = Energy.daysKw[0].values;
            kwDay.date = Energy.daysKw[0].date;
            $scope.data2 = kwDay;
            //data in a window variable for the click event
            daysKw = Energy.daysKw;
        });
        
});
App.controller('treeCtrl', function($scope,FacilitiesService) {
    
    FacilitiesService().then(function(facilities){
        $scope.facilities = facilities.data.facilities;
    });
    
});

