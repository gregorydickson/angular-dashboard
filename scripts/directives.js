'use strict';
/* Directives */
angular.module('myApp.directives', []).directive('dailyprofile', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            linedata: '='
        },
        template: '<div id="container_dailyprofile" style="margin: 0 auto">not working</div>',
        link: function(scope, element, attrs) {
            var chart = new Highcharts.Chart({
                chart: {
                    type: 'area',
                    renderTo: 'container_dailyprofile',
                    height: 500,
                    width: 600
                },
                 xAxis: {
                    showEmpty: false
                },
                yAxis: {
                    showEmpty: false
                },
                title: {
                    text: 'Load Profile'
                },
                series: [{
                    allowPointSelect: true,
                    data: scope.linedata
                }]
            });
            scope.$watch('linedata', function(newValue) {
                chart.series[0].setData(newValue,true);
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
        template: '<div id="container_area" style="margin: 0 auto">not working</div>',
        link: function(scope, element, attrs) {
            var chart = new Highcharts.Chart({
                chart: {
                    type: 'spline',
                    renderTo: 'container_area',
                    height: 500,
                    width: 600
                },
                xAxis: {
                    type: 'datetime'
                },
                title: {
                    text: 'KWH 30 Days'
                },
                series: [{
                    allowPointSelect: true,
                    data: scope.kwhdata,
                    point: {
                        events: {
                            click: function(e) {
                                var aDate = new Date(this.x+86400000);
                                var myDateString = aDate.getFullYear()+ '-' +
                                    ('0' + (aDate.getMonth()+1)).slice(-2) + '-' +
                                    ('0' + aDate.getDate()).slice(-2);
 
                                var newday = _.where(days, {date: myDateString});
                                Highcharts.charts[2].series[0].remove();
                                Highcharts.charts[2].setTitle({text:"Load Profile "+newday[0].date},{},false);
                                Highcharts.charts[2].addSeries({data: newday[0].values}, true);

                                newday = _.where(daysKw, {date: myDateString});
                                Highcharts.charts[3].series[0].remove();
                                Highcharts.charts[3].setTitle({text: "Demand Profile " + newday[0].date},{},false);
                                Highcharts.charts[3].addSeries({data: newday[0].values}, true);

                            }
                        }
                    }
                }]      
            });
            scope.$watch('kwhdata', function(newValue) {
                chart.series[0].setData(newValue,true);
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
        template: '<div id="container_heatmap" style="margin: 0 auto">not working</div>',
        link: function(scope, element, attrs) {
            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'container_heatmap',
                    height: 500,
                    width: 600
                },
                title: {
                        text: 'Placeholder'
                    }
            });
            scope.$watch('kwhheatdata', function(newValue, oldValue) {
                if($rootScope.intervalDates !== undefined){
                    chart = new Highcharts.Chart({
                    chart: {
                        type: 'heatmap',
                        renderTo: 'container_heatmap',
                        height: 500,
                        width: 600
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
                        text: 'Kw 30 Days'
                    },
                    xAxis: {
                        type: 'category',
                        categories: $rootScope.intervals,
                        tickInterval:20
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
                            [$rootScope.deciles[2], '#00DCDB'],
                            [$rootScope.deciles[3], '#BFD9F2'],
                            [$rootScope.deciles[4], '#ABD2F7'],
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
                           pointFormat: ' {point.y:%e %b, %Y}, Interval: {point.x} - <b>{point.value} KW</b>'
                        },
                        data: newValue,
                        point: {
                            events: {
                                click: function(e) {
                                    var aDate = new Date(this.y+86400000);
                                    var myDateString = aDate.getFullYear()+ '-' +
                                        ('0' + (aDate.getMonth()+1)).slice(-2) + '-' +
                                        ('0' + aDate.getDate()).slice(-2);
                                    var newday = _.where(daysKw, {date: myDateString});
                                    Highcharts.charts[3].series[0].remove();
                                    Highcharts.charts[3].setTitle({text: "Demand Profile " + newday[0].date},{},false);
                                    Highcharts.charts[3].addSeries({data: newday[0].values}, true);
                                    newday = _.where(days, {date: myDateString});
                                    Highcharts.charts[2].series[0].remove();
                                    Highcharts.charts[2].setTitle({text:"Load Profile "+newday[0].date},{},false);
                                    Highcharts.charts[2].addSeries({data: newday[0].values}, true);

                                }
                            }
                        }
                    }]
                    });
                }

            }, true);
        }
    }
}).directive('kwbarchart', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            bardata: '='
        },
        template: '<div id="container_kwhbarchart" style="margin: 0 auto">not working</div>',
        link: function(scope, element, attrs) {
            var chart = new Highcharts.Chart({
                chart: {
                    type: 'column',
                    renderTo: 'container_kwhbarchart',
                    height: 500,
                    width: 600
                },
                 xAxis: {
                    showEmpty: false
                },
                yAxis: {
                    showEmpty: false
                },
                title: {
                    text: 'Demand Profile'
                },
                series: [{
                    data: scope.bardata
                }]
               
            }); 
            scope.$watch('bardata', function(newValue) {
                chart.series[0].setData(newValue,true);
            }, true);
        }
    }
})