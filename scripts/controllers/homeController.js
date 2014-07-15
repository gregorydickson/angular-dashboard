myApp.controller('homeController', ['$scope', '$location',
    function($scope, $location) {
		// pie chart
        $scope.data1 = [
            ['Firefox', 45.0],
            ['IE', 26.8], {
                name: 'Chrome',
                y: 12.8,
                sliced: true,
                selected: true
            },
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['Others', 0.7]
        ];
        // column bar
        $scope.data2 = [{
            name: 'Meter1',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }, {
            name: 'Meter2',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
        }];
        $scope.barx = {
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        };
        $scope.bary = {
            min: 0,
            title: {
                text: 'kw'
            }
        };
		
		//
		// base line
		//
		$scope.highchartsNG = {
			
			options: {
				chart: {
					type: 'areaspline'
				}
			},
			series: [{
				data: [10, 15, 12, 8, 7]
			}],
			title: {
				text: 'Hello'
			},
			loading: false
		}

		
  
        

        
	}
])