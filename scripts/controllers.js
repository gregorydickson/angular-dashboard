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
        $scope.data2 = days[0].values;

        
});
myApp.controller('treeCtrl', function($scope) {

    $scope.rows = [{
      "name": "node1",
      "columns": [
        {
          "name": "node1.1"
        },
        {
          "name": "node1.2"
        }
      ],
    }, {
      "name": "node2",
      "columns": [
        {
          "name": "node2.1"
        },
        {
          "name": "node2.2"
        }
      ],
    }, {
      "name": "node3",
      "columns": [
        {
          "name": "node3.1"
        }
      ],
    }, {
      "name": "node4",
      "columns": [
        {
          "name": "node4.1"
        }
      ],
    }];
});

