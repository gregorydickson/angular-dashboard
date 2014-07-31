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
            $scope.dailyProfileData = Energy.days[0].values;
            //need the data in a window variable for the click event
            days = Energy.days;
            //fourth chart
            $scope.data2 = Energy.daysKw[0].values;
            //data in a window variable for the click event
            daysKw = Energy.daysKw;
        });
        
});
App.controller('treeCtrl', function($scope,FacilitiesService) {
    
    FacilitiesService().then(function(facilities){
        $scope.facilities = facilities.data.facilities;
    });
    
});

