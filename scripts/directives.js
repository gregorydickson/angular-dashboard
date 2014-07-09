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
}).directive('flexmonster', function() {
    return {
        restrict: 'C',
        link: function(score, element, attrs) {
            flexmonster.embedPivotComponent("scripts/lib/flexmonster/", "pivotContainer", "100%", "500", {
                configUrl: "scripts/lib/flexmonster/config.xml"
            }, "html5", true);
        }
    };
}).directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if (event.which === 13) {
                scope.$apply(function() {
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
}).directive('ngModelOnblur', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elm, attr, ngModelCtrl) {
            if (attr.type === 'radio' || attr.type === 'checkbox') return;
            
            elm.unbind('input').unbind('keydown').unbind('change');
            elm.bind('blur', function() {
                scope.$apply(function() {
                    ngModelCtrl.$setViewValue(elm.val());
                });         
            });
        }
    };
}).directive('hboTabs', function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            var jqueryElm = $(elm[0]);
            $(jqueryElm).tabs();
        }
    };
}).directive('hcColumnBar', function() {
    return {
        restrict: 'C',
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
}).directive('buttonGroup', function() {
    return {
        restrict: 'E',
        scope: {
            states: '=',
            state: '=',
            onStateChange: '='
        },
        template: '<div class="btn-group">' + '<button class="btn" ng-repeat="s in states" ng-click="select(s, $event)">' + '{{s}}' + '</button>' + '</div>',
        replace: true,
        controller: function($scope, $element) {
            // Make sure that style is applied to initial state value
            $scope.$watch(function() {
                return $($element).find('.btn').length; // it checks if the buttons are added to the DOM
            }, function(newVal) {
                // it applies the selected style to the currently defined state, if any
                if (newVal > 0) {
                    $($element).find('.btn').each(function(index, elm) {
                        if ($(elm).text() == $scope.state) $(elm).addClass('btn-primary');
                    });
                }
            }, true);
            // Apply style changes according to selection
            $scope.select = function(s, evt) {
                $scope.state = s;
                $($element).find('.btn').removeClass('btn-primary'); // reset styles on all buttons
                angular.element(evt.srcElement).addClass('btn-primary'); // apply style only to selected button
            };
            // Execute callback if it was provided
            $scope.$watch('state', function() {
                if ($scope.onStateChange) {
                    $scope.onStateChange();
                }
            }, true);
        }
    };
});