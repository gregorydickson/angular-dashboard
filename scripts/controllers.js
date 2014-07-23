'use strict';
myApp.controller('homeController', function($scope,  KwhMonth) {
    
        //scope for kwh 30 days, first chart
        $scope.kwh = KwhMonth;
        //config for kwh
        
        //scope for heatmap, second chart
        $scope.kwhheatdata = kwhHeatData;

        //scope for daily profile, third chart
        $scope.dailyProfileData = days[0].values;
        //fourth chart
        $scope.data2 = daysKw[0].values;

        
});
myApp.controller('treeCtrl', function($scope) {
    //$scope.facilities = treeArray;
    $scope.facilities = treeArray;
});

