'use strict';
/* Directives */
angular.module('myApp.directives', []).directive('dailyprofile', function($rootScope) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            linedata: '='
        },
        template: '<div id="container_dailyprofile">not working</div>',
        link: function(scope, element, attrs) {
            var chart = new Highcharts.Chart({
                chart: {
                    type: 'line',
                    renderTo: 'container_dailyprofile',
                },
                 xAxis: {
                    type: 'categories',
                    tickInterval: 10
                },
                yAxis: {
                    showEmpty: false
                },
                title: {
                    text: 'Load Profile'
                },
                series: [{
                    allowPointSelect: true,
                }]
            });
            scope.$watch('linedata', function(newValue) {
                if (newValue !== undefined) {
                    var aDate = new Date(newValue.date);
                    var aColor;
                    var day = aDate.getUTCDay();
                    if(day == 0 || day == 1) {
                        aColor = '#99FF33'; 
                    } else if(day == 2) { 
                        aColor = '#FF9900'; 
                    } 
                    else {
                        aColor = '#CC0000';
                    }
                    chart.series[0].setData(newValue.values,false);
                    chart.series[0].color = aColor;
                    chart.xAxis[0].setCategories($rootScope.intervalTimes,false);
                    chart.redraw();
                }
            }, true);
        }
    }
}).directive('kwharea', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            kwhdata: '='
        },
        template: '<div id="container_area" >not working</div>',
        link: function(scope, element, attrs) {
            var chart = new Highcharts.Chart({
                chart: {
                    type: 'spline',
                    renderTo: 'container_area',
                }
            });
            scope.$watch('kwhdata', function(newValue) {
                chart = new Highcharts.Chart({
                    chart: {
                        type: 'spline',
                        renderTo: 'container_area',
                    },
                    xAxis: {
                        type: 'datetime',
                    },
                    title: {
                        text: 'Load Profile 30 Days'
                    },
                    series: [{
                        allowPointSelect: true,
                        data: newValue,
                        point: {
                            events: {
                                click: function(e) {
                                    var aDate = new Date(this.x+86400000);
                                    var aColor;
                                    var day = aDate.getUTCDay();
                                    if(day == 0 || day == 1) {
                                        aColor = '#99FF33'; 
                                    } else if(day == 2) { 
                                        aColor = '#FF9900'; 
                                    } 
                                    else {
                                        aColor = '#CC0000';
                                    }
                                    var myDateString = aDate.getFullYear()+ '-' +
                                        ('0' + (aDate.getMonth()+1)).slice(-2) + '-' +
                                        ('0' + aDate.getDate()).slice(-2);
     
                                    var newday = _.where(days, {date: myDateString});
                                    Highcharts.charts[2].series[0].remove();
                                    Highcharts.charts[2].setTitle({text:"Load Profile "+newday[0].date},{},false);
                                    Highcharts.charts[2].addSeries({data: newday[0].values, color: aColor}, true);

                                    newday = _.where(daysKw, {date: myDateString});
                                    Highcharts.charts[3].series[0].remove();
                                    Highcharts.charts[3].setTitle({text: "Demand Profile " + newday[0].date},{},false);
                                    Highcharts.charts[3].addSeries({data: newday[0].values,color: aColor}, true);
                                }
                            }
                        }
                    }]      
                });
            }, true);
        }
    }
}).directive('kwhheatmap', function($rootScope) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            kwhheatdata: '='
        },
        template: '<div id="container_heatmap" >not working</div>',
        link: function(scope, element, attrs) {
            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'container_heatmap',
                },
                title: {
                        text: 'Demand'
                    }
            });
            scope.$watch('kwhheatdata', function(newValue, oldValue) {
                if($rootScope.intervalDates !== undefined){
                    chart = new Highcharts.Chart({
                    chart: {
                        type: 'heatmap',
                        renderTo: 'container_heatmap',
                    },
                    yAxis: {
                        type: 'datetime',
                        min:$rootScope.intervalDates[0],
                        max:$rootScope.intervalDates[95],
                        tickInterval: 10,
                        dateTimeLabelFormats: {
                            day: '%e of %b'
                        }
                    },
                    title: {
                        text: 'Demand 30 Days'
                    },
                    xAxis: {
                        type: 'categories',
                        categories: $rootScope.intervalTimes,
                        tickInterval: 10
                    },
                    colorAxis: {
                        stops: [
                            /*
                            [$rootScope.deciles[0], '#00E54B'],
                            [$rootScope.deciles[1], '#00E094'],
                            [$rootScope.deciles[2], '#00DCDB'],
                            [$rootScope.deciles[3], '#0091D8'],
                            [$rootScope.deciles[4], '#0047D4'],
                            [$rootScope.deciles[5], '#0000CF'],
                            [$rootScope.deciles[6], '#4300CB'],
                            [$rootScope.deciles[7], '#8400C7'],
                            [$rootScope.deciles[8], '#C200C3'],
                            [$rootScope.deciles[9], '#FEF143'],
                            */
                            
                            [$rootScope.deciles[0], '#0021BF'],
                            [$rootScope.deciles[3], '#00DCDB'],
                            [$rootScope.deciles[4], '#BFD9F2'],
                            [$rootScope.deciles[5], '#ABD2F7'],
                            [$rootScope.deciles[8], '#F9B4DF'],
                            [$rootScope.deciles[9], '#E50035'],
                            
                            
                        ],
                        min: $rootScope.minKwValue,
                        max: $rootScope.maxKwValue,
                        startOnTick: false,
                        endOnTick: false,
                        labels: {
                            format: '{value} KW'
                        }
                    },
                    series: [{
                        borderWidth: 0,
                        rowsize: 100000000,
                        tooltip: {
                            headerFormat: 'KW<br/>',
                            pointFormat: ' {point.y:%a %b %e, %Y}, Interval: {point.x} - <b>{point.value} KW</b>'
                        },
                        data: newValue,
                        point: {
                            events: {
                                click: function(e) {
                                    var aDate = new Date(this.y+86400000);
                                    var aColor;
                                    var day = aDate.getUTCDay();
                                    if(day == 0 || day == 1) {
                                        aColor = '#99FF33'; 
                                    } else if(day == 2) { 
                                        aColor = '#FF9900'; 
                                    } 
                                    else {
                                        aColor = '#CC0000';
                                    }
                                    var myDateString = aDate.getFullYear()+ '-' +
                                        ('0' + (aDate.getMonth()+1)).slice(-2) + '-' +
                                        ('0' + aDate.getDate()).slice(-2);
                                    var newday = _.where(daysKw, {date: myDateString});
                                    Highcharts.charts[3].series[0].remove();
                                    Highcharts.charts[3].setTitle({text: "Demand Profile " + newday[0].date},{},false);
                                    Highcharts.charts[3].addSeries({data: newday[0].values,color: aColor}, true);
                                    newday = _.where(days, {date: myDateString});
                                    Highcharts.charts[2].series[0].remove();
                                    Highcharts.charts[2].setTitle({text:"Load Profile "+newday[0].date},{},false);
                                    Highcharts.charts[2].addSeries({data: newday[0].values,color: aColor}, true);
                                }
                            }
                        }
                    }]
                    });
                }
            }, true);
        }
    }
}).directive('kwbarchart', function($rootScope) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            bardata: '='
        },
        template: '<div id="container_kwhbarchart">not working</div>',
        link: function(scope, element, attrs) {
            
            var chart = new Highcharts.Chart({
                chart: {
                    type: 'column',
                    renderTo: 'container_kwhbarchart',

                },
                xAxis: {
                    type: 'categories',
                    categories: $rootScope.intervalTimes,
                    tickInterval: 10
                },
                yAxis: {
                    showEmpty: false
                },
                title: {
                    text: 'Demand Profile'
                },
                series: [{
                  
                }]
               
            }); 
            scope.$watch('bardata', function(newValue) {
                if (newValue !== undefined) {
                    var aDate = new Date(newValue.date);
                    var aColor;
                    var day = aDate.getUTCDay();
                    if(day == 0 || day == 1) {
                        aColor = '#99FF33'; 
                    } else if(day == 2) { 
                        aColor = '#FF9900'; 
                    } 
                    else {
                        aColor = '#CC0000';
                    }
                    chart.series[0].setData(newValue.values,false);
                    chart.series[0].color = aColor;

                    chart.xAxis[0].setCategories($rootScope.intervalTimes,false);
                    chart.redraw();
                }
            }, true);
        }
    }
})