'use strict';
/* Directives */
angular.module('myApp.directives', []).directive('appVersion', ['version',
    function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }
]).directive('dropdown', function() {
    return function(scope, elm, attrs) {
        $(elm).dropdown();
    };
}).directive('barchart', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            columndata: '=',
            xaxis: '=',
            yaxis: '=',
            charttitle: '='
        },
        template: '<div id="container_columnbar" style="margin: 0 auto">not working</div>',
        link: function(scope, element, attrs) {
            var chart = new Highcharts.Chart({
                chart: {
                    type: 'column',
                    renderTo: 'container_columnbar',
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                width: 400,
                title: {
                    text: (scope.charttitle) ? scope.charttitle : ""
                },
                subtitle: {
                    text: (scope.chart_subtitle) ? scope.chart_subtitle : ""
                },
                xAxis: scope.xaxis,
                yAxis: scope.yaxis,
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0,
                        borderWidth: 0
                    }
                },
                series: scope.columndata
            });
            scope.$watch("columndata", function(newValue) {
                chart.series = newValue;
            }, true);
        }
    }
}).directive('hcPie', function() {
    return {
        restrict: 'C',
        replace: true,
        scope: {
            piedata: '='
        },
        template: '<div id="container_pie" style="margin: 0 auto">not working</div>',
        link: function(scope, element, attrs) {
            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'container_pie',
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                width: 400,
                title: {
                    text: 'Pie Chart'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage}%</b>',
                    percentageDecimals: 1
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            color: '#000000',
                            connectorColor: '#000000',
                            formatter: function() {
                                //return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
                                return '<b>' + this.point.name + '</b>';
                            }
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Snape Data',
                    data: scope.piedata
                }]
            });
            scope.$watch("piedata", function(newValue) {
                chart.series[0].setData(newValue, true);
            }, true);
        }
    }
})