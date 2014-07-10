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
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
        }];
        $scope.barx = {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        };
        $scope.bary = {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
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

		//
		//grid
		//
        $scope.data = {
            persons: [],
            selected: []
        };
        $scope.data.persons = [{
            id: 1,
            name: "Max",
            number: 51323.512,
            value: 'on'
        }, {
            id: 2,
            name: "Adam",
            number: 7245.2,
            value: 'on'
        }, {
            id: 3,
            name: "Betty",
            number: 828,
            value: 'off'
        }, {
            id: 4,
            name: "Sara",
            number: 23452.2,
            value: 'on'
        }];
        $scope.data.selected[0] = $scope.data.persons[0];
        $scope.grid = {
            options: {
                data: "data.persons",
                selectedItems: $scope.data.selected,
                multiSelect: false,
                showSelectionCheckbox: true,
                columnDefs: [{
                    field: "id",
                    displayName: "ID"
                }, {
                    field: "name",
                    displayName: "Name"
                }, {
                    field: "number",
                    displayName: "Nummer",
                    cellFilter: "number:2"
                }, {
                    field: "value",
                    displayName: "Value",
                    enableCellEdit: true,
                    cellTemplate: "<div ng-class=\"'ngCellText colt' + $index\">" + '<input type="checkbox" ng-checked="row.entity.value==\'on\'" ng-input="COL_FIELD" ng-model="row.entity" /></div>' + "</div>",
                    editableCellTemplate: "<div ng-class=\"'ngCellText colt' + $index\">" + '<input type="checkbox" ng-checked="row.entity.value==\'on\'" ng-input="COL_FIELD" /></div>' + '</div>'
                }]
            }
        };

        
	}
])