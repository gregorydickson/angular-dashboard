'use strict';
/* Directives */
angular.module('myApp.directives', []).directive('dailyprofile', function($rootScope) {
    //Chart 3, bottom left 
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
                yAxis:[{ //First Y Axis
                    title: {
                        text: 'KWH',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    },
                    labels: {
                        format: '{value} KWH',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    },
                },
                { // Secondary yAxis
                    title: {
                        text: 'Temperature',
                        style: {
                            color: Highcharts.getOptions().colors[2]
                        }
                    },
                    labels: {
                        format: '{value} F',
                        style: {
                            color: Highcharts.getOptions().colors[2]
                        }
                    },
                    opposite: true,
                }],
                xAxis: {
                    tickInterval: 10
                },
                title: {
                    text: 'Load Profile'
                },
                series: [{
                    name: 'KWH',
                    allowPointSelect: true,
                },
                {
                    name: 'Temperature',
                    allowPointSelect: true,
                    yAxis: 1,

                }]
            });
            scope.$watch('linedata', function(newValue) {
                console.log("CHART #3 WATCH FUNCTION");
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
                    if(newValue.temps !== undefined){
                        chart.series[1].setData(newValue.temps,false);
                    }
                    chart.redraw();
                }
            }, true);
        }
    }
}).directive('kwharea', function($rootScope) {
    // First Chart, upper left
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
                console.log("CHART #1 WATCH FUNCTION");
                if(newValue !== undefined){
                    console.log("Chart 1 newValue in $watch");
                    chart = new Highcharts.Chart({
                        chart: {
                            type: 'spline',
                            renderTo: 'container_area',
                        },
                        xAxis: {
                            type: 'datetime',
                        },
                        yAxis: [{
                            title: {
                                text: 'KWH',
                                style: {
                                    color: Highcharts.getOptions().colors[0]
                                }
                            },
                            labels: {
                                format: '{value} KWH',
                                style: {
                                    color: Highcharts.getOptions().colors[0]
                                }
                            },
                        },
                        { // Secondary yAxis
                            title: {
                                text: 'Temperature',
                                style: {
                                    color: Highcharts.getOptions().colors[2]
                                }
                            },
                            labels: {
                                format: '{value} F',
                                style: {
                                    color: Highcharts.getOptions().colors[2]
                                }
                            },
                            opposite: true,
                        }],
                        title: {
                            text: 'Load Profile 30 Days'
                        },
                        series: [{
                            name: "Temperature",
                            data: newValue.alltemps,
                            lineWidth: 2,
                            yAxis: 1,
                            color: Highcharts.getOptions().colors[2]
                            
                        },
                        {
                            name: "KWH",
                            color: Highcharts.getOptions().colors[1],
                            allowPointSelect: true,
                            data: newValue.allkwh,
                            point: {
                                events: {
                                    click: function(e) {
                                        var aDate = new Date(this.x);
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
                                        var myDateString = aDate.getFullYear()+ '/' +
                                            ('0' + (aDate.getMonth()+1)).slice(-2) + '/' +
                                            ('0' + aDate.getDate()).slice(-2);
         
                                        var newday = _.where(days, {date: myDateString});
                     
                                        Highcharts.charts[2].setTitle({text:"Load Profile "+newday[0].date},{},false);
                                        Highcharts.charts[2].series[0].setData(newday[0].values, false);
                                        Highcharts.charts[2].series[0].color = aColor;
                                        Highcharts.charts[2].series[1].setData(newday[0].temps, false);
                                        Highcharts.charts[2].redraw();
                
                                        var kwday = _.where(daysKw, {date: myDateString});
                                        
                                        Highcharts.charts[3].setTitle({text: "Demand Profile " + newday[0].date},{},false);
                                        Highcharts.charts[3].series[0].setData(kwday[0].values, false);
                                        Highcharts.charts[3].series[0].color = aColor;
                                        Highcharts.charts[3].series[1].setData(newday[0].temps,false);
                                        Highcharts.charts[3].redraw();
                                    }
                                }
                            }

                        }]      
                    });
                }
            }, true);
        }
    }
}).directive('kwhheatmap', function($rootScope) {
    //HEATMAP Upper Right
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
                console.log("HEATMAP WATCH FUNCTION");
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
                            [$rootScope.deciles[2], '#00DCDB'],
                            [$rootScope.deciles[5], '#BFD9F2'],
                            [$rootScope.deciles[6], '#ABD2F7'],
                            [$rootScope.deciles[7], '#F9B4DF'],
                            [$rootScope.deciles[8], '#E50035'],
                            
                            
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
                                click:  function (e){
                                    var aDate = new Date(this.y);
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
                                    var myDateString = aDate.getFullYear()+ '/' +
                                        ('0' + (aDate.getMonth()+1)).slice(-2) + '/' +
                                        ('0' + aDate.getDate()).slice(-2);

                                    var newday = _.where(days, {date: myDateString});
 
                                    Highcharts.charts[2].setTitle({text:"Load Profile "+newday[0].date},{},false);
                                    Highcharts.charts[2].series[0].setData(newday[0].values, false);
                                    Highcharts.charts[2].series[0].color = aColor;
                                    if(newday[0].temps !== undefined){
                                        Highcharts.charts[2].series[1].setData(newday[0].temps, false);
                                    }
                                    Highcharts.charts[2].redraw();
                                    
                                    var newdaykw = _.where(daysKw, {date: myDateString});
                                    Highcharts.charts[3].series[0].setData(newdaykw[0].values, false);
                                    Highcharts.charts[3].setTitle({text: "Demand Profile " + newday[0].date},{},false);
                                    Highcharts.charts[3].series[1].setData(newday[0].temps);
                                    Highcharts.charts[3].series[0].color = aColor;
                                    Highcharts.charts[3].redraw();   
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
    //lower right - KW Bar Chart
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
                    
                    renderTo: 'container_kwhbarchart',

                },
                xAxis: {
                    type: 'categories',
                    categories: $rootScope.intervalTimes,
                    tickInterval: 10
                },
                yAxis: [{ //First Y Axis
                    title: {
                        text: 'KW',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    },
                    labels: {
                        format: '{value} KW',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    },
                },
                { // Secondary yAxis
                    title: {
                        text: 'Temperature',
                        style: {
                            color: Highcharts.getOptions().colors[2]
                        }
                    },
                    labels: {
                        format: '{value} F',
                        style: {
                            color: Highcharts.getOptions().colors[2]
                        }
                    },
                    opposite: true,
                }],
                title: {
                    text: 'Demand Profile'
                },
                series: [{
                    name: 'KW',
                    type:'spline',
                    yAxis: 0
                },
                {
                    type:'spline',
                    name: 'Temperature',
                    allowPointSelect: true,
                    yAxis: 1,
                }]
            }); 
            scope.$watch('bardata', function(newValue) {
                console.log("CHART #4 WATCH FUNCTION");
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
                    if(newValue.temps !== undefined){
                        chart.series[1].setData(newValue.temps,false);
                    }
                    
                    chart.redraw();
                }
            }, true);
        }
    }
})