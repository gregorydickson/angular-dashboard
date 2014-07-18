'use strict';
/* Directives */
angular.module('myApp.directives', []).directive('areaspline', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            columndata: '=',
        },
        template: '<div id="container_areaspline" style="margin: 0 auto">not working</div>',
        link: function(scope, element, attrs) {
            var chart = new Highcharts.Chart({
                chart: {
                    type: 'areaspline',
                    renderTo: 'container_areaspline',
                },
                title: {
                },
                subtitle: {  
                },
                tooltip: {  
                },
                series: [{
                    data: scope.columndata
                }] 

            });
            scope.$watch("columndata", function(newValue) {
                chart.series = newValue;
            }, true);
        }
    }
}).directive('dailyprofile', function() {
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
                    type: 'spline',
                    renderTo: 'container_dailyprofile',
                },
                title: {
                    text: 'Daily Profile'
                },
                series: [{
                    data: scope.linedata
                }]
                
               
            });
            scope.$watch("linedata", function(newValue) {
                chart.series = newValue;
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
                    type: 'area',
                    renderTo: 'container_area',
                },
                xAxis: {
                    type: 'datetime'
                },
                title: {
                    text: 'KWH 30 Days'
                },
                series: [{
                    data: scope.kwhdata,
                    events: {
                        click: function (e) {

                            alert("date value" +  e.point.x);
                        }
                    }
                }]
               
            });
            scope.$watch("kwhdata", function(newValue) {
                chart.series = newValue;
            }, true);
        }
    }
}).directive('kwhheatmap', function() {
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
                    type: 'heatmap',
                    renderTo: 'container_heatmap',
                },
                yAxis: {
                    type: 'datetime',
                    min:intervalDates[0],
                    max:intervalDates[95],
                    tickInterval: 10,
                    dateTimeLabelFormats: {
                        day: '%e of %b'
                    }
                },
                title: {
                    text: 'Heatmap 30 Days'
                },
                xAxis: {
                    type: 'category',
                    categories: intervals,
                    tickInterval:20
                },
                colorAxis: {
                    stops: [
                        [deciles[0], '#00E54B'],
                        [deciles[1], '#00E094'],
                        [deciles[2], '#00DCDB'],
                        [deciles[3], '#0091D8'],
                        [deciles[4], '#0047D4'],
                        [deciles[5], '#0000CF'],
                        [deciles[6], '#4300CB'],
                        [deciles[7], '#8400C7'],
                        [deciles[8], '#C200C3'],
                        [deciles[9], '#BF007F'],
                    ],
                    min: minValue,
                    max: maxValue,
                    startOnTick: false,
                    endOnTick: false,
                    labels: {
                        format: '{value} KWH'
                    }
                },
                series: [{
                    borderWidth: 0,
                    rowsize: 100000000,
                    tooltip: {
                    headerFormat: 'KW<br/>',
                       pointFormat: '{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} KWH</b>'
                    },
                    data: scope.kwhheatdata
                }]
               
            });
            scope.$watch("kwhheatdata", function(newValue) {
                chart.series = newValue;
            }, true);
        }
    }
})