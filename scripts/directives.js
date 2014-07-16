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
                series: scope.columndata,
            });
            scope.$watch("columndata", function(newValue) {
                chart.series = newValue;
            }, true);
        }
    }
}).directive('linechart', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            linedata: '='
        },
        template: '<div id="container_line" style="margin: 0 auto">not working</div>',
        link: function(scope, element, attrs) {
            var chart = new Highcharts.Chart({
                chart: {
                    type: 'line',
                    renderTo: 'container_line',
                },
                series: scope.linedata,
               
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
                    data: scope.kwhdata
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
                    type: 'category',
                    categories: intervalDates
                    
                },
                title: {
                    text: 'Heatmap 30 Days'
                },
                colorAxis: {
                    
                    //min: 200,
                    //max: 450,
                    startOnTick: false,
                    endOnTick: false,
                    labels: {
                        format: '{value} kw'
                    }
                },
                xAxis: {
                    
                    type: 'category',
                    categories: intervals,
                    
                },
                series: [{
                    //borderWidth: 0,
                    //nullColor: '#EFEFEF',
                    rowsize: 500000000000,
                    //colsize: 10 * 36e5,
                    //colsize: 50 * 36e5,
                    tooltip: {
                    headerFormat: 'KW<br/>',
                       // pointFormat: '{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} KWH</b>'
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