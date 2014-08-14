'use strict';
App.controller('loadProfileController', function($scope,$rootScope,MetersMessageBus, EnergyAsyncService) {

    EnergyAsyncService.defaultView().then(function (Energy) {

        //scope for kwh 30 days, first chart
        $scope.kwh = Energy;
        
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
        kwhDay.temps = Energy.days[0].temps;
        $scope.dailyProfileData = kwhDay;
        //need the data in a window variable for the click event
        days = Energy.days;
        //fourth chart
        var kwDay = {};
        kwDay.values = Energy.daysKw[0].values;
        kwDay.date = Energy.daysKw[0].date;
        kwDay.temps = Energy.days[0].temps;
        $scope.data2 = kwDay;
        //data in a window variable for the click event
        daysKw = Energy.daysKw;
    });

    $scope.$on('handleBroadcast', function(event) {
        console.log('Message Received: ' + MetersMessageBus.message);
        
        EnergyAsyncService.updateView(MetersMessageBus.message,event).then(function (Energy) {


            //scope for kwh 30 days, first chart
            $scope.kwh = Energy;
            
             //scope for heatmap, second chart
            $rootScope.deciles = Energy.percentDeciles;
            $rootScope.minKwValue = Energy.minKwValue;
            $rootScope.maxKwValue = Energy.maxKwValue;
            $rootScope.intervals = Energy.intervals;
            $rootScope.intervalDates = Energy.intervalDates;
            $rootScope.intervalTimes = Energy.intervalTimes;
            $scope.kwhheatdata = Energy.kwhHeatData;
            $rootScope.refresh = true;
            console.log("Refresh set on Root scope");

            //scope for daily profile, third chart
            var kwhDay = {};
            kwhDay.values = Energy.days[0].values;
            kwhDay.date = Energy.daysKw[0].date;
            kwhDay.intervalTimes = Energy.intervalTimes;
            kwhDay.temps = Energy.days[0].temps;
            $scope.dailyProfileData = kwhDay;
            //need the data in a window variable for the click event
            days = Energy.days;
            //fourth chart
            var kwDay = {};
            kwDay.values = Energy.daysKw[0].values;
            kwDay.date = Energy.daysKw[0].date;
            kwDay.temps = Energy.days[0].temps;
            $scope.data2 = kwDay;
            //data in a window variable for the click event
            daysKw = Energy.daysKw;
            _.defer(function(){

                $rootScope.$digest()
            });
        });
        
    }); 

        
});
App.controller('treeCtrl', function($scope,ConfigService,MetersMessageBus) {
    $scope.metersSelected = [];
    ConfigService.getConfig().then(function(config){
        var facilities = config.data.facilities;
        var lpPage = _.find(config.data.pages, {'name': 'LP'});
        $scope.views = lpPage.views;
        //get the default view and find the meters that should be selected
        _.forEach($scope.views, function(view){
            console.log("view name " + view.name);
            if(view.default === true) {
                _.forEach(view.meters,function(meter){
                    $scope.metersSelected.push(meter);
                });
            }

        });
        //create a selected attribute on all meters and set it true
        // if they are in the selected meters list otherwise false
        _.forEach(facilities, function(facility){
            _.forEach(facility.meters, function(meter){
                meter.selected = false;
                if(_.contains($scope.metersSelected,meter.id )){
                    meter.selected = true;
                }
            });
        });
        
        $scope.facilities = facilities;
    });
    $scope.selectFacility = function(){

    };

    $scope.refresh = function() {
        var message = $scope.metersSelected;
        MetersMessageBus.handleMessage(message);
    };
    
    //watch for changes
    $scope.$watch('facilities', function (newvalue, oldvalue) {
        if(newvalue){
            console.log("watch function facilities");
            //update list of meters
            $scope.metersSelected = [];
            _.forEach(newvalue, function(facility){
                _.forEach(facility.meters , function(meter){
                    if(meter.selected === true)
                    {
                        $scope.metersSelected.push(meter.id);
                        console.log("selected METER " + meter.id);
                    }
                });
            });
        }
      
    }, true);
    
    
});



