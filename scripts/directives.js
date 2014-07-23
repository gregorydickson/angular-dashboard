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
            $(element[0]).highcharts({
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
                    text: 'Daily Profile'
                },
                series: [{
                    allowPointSelect: true,
                    data: scope.linedata
                }]
               
            }); 
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
                                Highcharts.charts[2].setTitle({text:"KwH "+newday[0].date},{},false);
                                Highcharts.charts[2].addSeries({data: newday[0].values}, true);

                                newday = _.where(daysKw, {date: myDateString});
                                Highcharts.charts[3].series[0].remove();
                                Highcharts.charts[3].setTitle({text: "Kw " + newday[0].date},{},false);
                                Highcharts.charts[3].addSeries({data: newday[0].values}, true);

                            }
                        }
                    }
                }]      
            });
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
                    height: 500,
                    width: 600
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
                    text: 'Kw 30 Days'
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
                    min: minKwValue,
                    max: maxKwValue,
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
                    data: scope.kwhheatdata,
                    point: {
                        events: {
                            click: function(e) {
                                //var aDate = new Date(this.y);
                                var aDate = new Date(this.y+86400000);
                                console.log("timezone offset is " + aDate.getTimezoneOffset());
                                console.log("heatmap y value is "+this.y);
                                var myDateString = aDate.getFullYear()+ '-' +
                                    ('0' + (aDate.getMonth()+1)).slice(-2) + '-' +
                                    ('0' + aDate.getDate()).slice(-2);
                                console.log("heatmap date is " + aDate.toString()); 
                                var newday = _.where(daysKw, {date: myDateString});
                                Highcharts.charts[3].series[0].remove();
                                Highcharts.charts[3].setTitle({text: "Kw " + newday[0].date},{},false);
                                Highcharts.charts[3].addSeries({data: newday[0].values}, true);
                                console.log("the date looked up by heatmap "+newday[0].date)
                                newday = _.where(days, {date: myDateString});
                                Highcharts.charts[2].series[0].remove();
                                Highcharts.charts[2].setTitle({text:"KwH "+newday[0].date},{},false);
                                Highcharts.charts[2].addSeries({data: newday[0].values}, true);

                            }
                        }
                    }
                }]
            });
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
            $(element[0]).highcharts({
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
                    text: 'Daily Profile'
                },
                series: [{
                    data: scope.bardata
                }]
               
            }); 
        }
    }
})