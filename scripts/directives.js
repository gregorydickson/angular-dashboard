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
                credits: {
                    enabled: false
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
                    min: 0,
                    max:200,
                    tickInterval: 100

                },
                { // Secondary yAxis
                    title: {
                        text: 'Temperature'
                    },
                    labels: {
                        format: '{value} F',
                        style: {
                            color: Highcharts.getOptions().colors[2]
                        }
                    },
                    min: 0,
                    max: 125,
                    opposite: true,
                }],
                xAxis: {
                    tickInterval: 10
                },
                title: {
                    text: "Load Profile"
                },
                series: [{
                    name: 'KWH',
                    allowPointSelect: true,
                    marker: {
                        enabled: false
                    },
                    color: Highcharts.getOptions().colors[0]
                },
                {
                    name: 'Temperature',
                    allowPointSelect: true,
                    yAxis: 1,
                    marker: {
                        enabled: false
                    },
                    color: Highcharts.getOptions().colors[2]
                }]
            });
            scope.$watch('linedata', function(newValue) {
                console.log("CHART #3 WATCH FUNCTION");
                if (newValue !== undefined) {
                    var aDate = new Date(newValue.date);
                    var formattedDate = aDate.getMonth() + "/" + 
                                        aDate.getDate() + "/" +
                                        aDate.getFullYear();
                    
                    chart.series[0].setData(newValue.values,false);
                    chart.setTitle({text: "Load Profile " + formattedDate},{},false);
                    chart.xAxis[0].setCategories($rootScope.intervalTimes,false);
                    if(newValue.temps !== undefined){
                        chart.series[1].color = Highcharts.getOptions().colors[2];
                        chart.series[1].setData(newValue.temps,false,true);
                    } else if (chart.series[1] != undefined)
                    {
                        chart.series[1].setData(null,false,true);
                    }
                    chart.yAxis[0].update({max: (Math.ceil(Energy.maxValue/100)*100) },false);
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
                }, 
                credits: {
                    enabled: false
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
                        credits: {
                            enabled: false
                        },
                        xAxis: {
                            type: 'datetime',
                        },
                        yAxis: [{
                            title: {
                                text: 'KWH',
                                style: {
                                    color: Highcharts.getOptions().colors[1]
                                }
                            },
                            labels: {
                                format: '{value} KWH',
                                style: {
                                    color: Highcharts.getOptions().colors[1]
                                }
                            },
                            min: 0,

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
                            min: 0,
                            opposite: true,
                        }],
                        title: {
                            text: 'Load Profile 30 Days'
                        },
                        series: [{
                            name: "Temperature",
                            data: newValue.alltemps,
                            lineWidth: 1.25,
                            yAxis: 1,
                            color: Highcharts.getOptions().colors[2]
                            
                        },
                        {
                            name: "KWH",
                            color: Highcharts.getOptions().colors[1],
                            allowPointSelect: true,
                            lineWidth: .75,
                            data: newValue.allkwh,
                            point: {
                                events: {
                                    click: function(e) {
                                        var date = new Date();
                                        var timezoneOffset = date.getTimezoneOffset();
                                        console.log("Timezone Offset is " + timezoneOffset);
                                        console.log("this.x is " + this.x);
                                        var aDate = new Date(this.x+(timezoneOffset * 60000));
                                    
                                        var myDateString = aDate.getFullYear()+ '/' +
                                            ('0' + (aDate.getMonth()+1)).slice(-2) + '/' +
                                            ('0' + aDate.getDate()).slice(-2);
                                        console.log("Date is: " + myDateString);
                                        var newday = _.where(days, {date: myDateString});
                                        var formattedDate = aDate.getMonth() + "/" + 
                                                            aDate.getDate() + "/" +
                                                            aDate.getFullYear();
                     
                                        Highcharts.charts[2].setTitle({text:"Load Profile "+ formattedDate},{},false);
                                        Highcharts.charts[2].series[0].setData(newday[0].values, false);
                                        Highcharts.charts[2].series[1].setData(newday[0].temps, false);
                                        Highcharts.charts[2].redraw();
                
                                        var kwday = _.where(daysKw, {date: myDateString});
                                        
                                        Highcharts.charts[3].setTitle({text: "Demand Profile " + formattedDate},{},false);
                                        Highcharts.charts[3].series[0].setData(kwday[0].values, false);
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
                credits: {
                    enabled: false
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
                    credits: {
                        enabled: false
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
                            formatter: function: () {
                                return '<b>'+ Highcharts.numberFormat(this.y, 0) +'</b><br/>'+
                                        'test: '+ this.point.name;
                            }
                            events: {
                                click:  function (e){
                                    
                                    var aDate = new Date(this.y);
                                    
                                    var myDateString = aDate.getFullYear()+ '/' +
                                        ('0' + (aDate.getMonth()+1)).slice(-2) + '/' +
                                        ('0' + aDate.getDate()).slice(-2);

                                    var formattedDate = aDate.getMonth() + "/" + 
                                                        aDate.getDate() + "/" +
                                                        aDate.getFullYear();

                                    var newday = _.where(days, {date: myDateString});
 
                                    Highcharts.charts[2].setTitle({text:"Load Profile "+formattedDate},{},false);
                                    Highcharts.charts[2].series[0].setData(newday[0].values, false);
                                    if(newday[0].temps !== undefined){
                                        Highcharts.charts[2].series[1].setData(newday[0].temps, false);
                                    }
                                    Highcharts.charts[2].redraw();
                                    
                                    var newdaykw = _.where(daysKw, {date: myDateString});
                                    
                                    Highcharts.charts[3].series[0].setData(newdaykw[0].values, false);
                                    Highcharts.charts[3].setTitle({text: "Demand Profile " + formattedDate},{},false);
                                    Highcharts.charts[3].series[1].setData(newday[0].temps, false);
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
    //Fourth Chart - lower right - KW Bar Chart
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
                credits: {
                    enabled: false
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
                    max: 100,
                    tickInterval: 100
                },
                { // Secondary yAxis
                    title: {
                        text: 'Temperature',
                        style: {
                            color: Highcharts.getOptions().colors[2]
                        }
                    },
                    min: 0,
                    max: 125,
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
                    type:'column',
                    allowPointSelect:false,
                    yAxis: 0,
                    color: Highcharts.getOptions().colors[0],
                    marker: {
                        enabled: false
                    }
                },
                {
                    type:'spline',
                    name: 'Temperature',
                    allowPointSelect: false,
                    yAxis: 1,
                    color: Highcharts.getOptions().colors[2],
                    marker: {
                        enabled: false
                    }
                }]
            }); 
            scope.$watch('bardata', function(newValue) {
                console.log("CHART #4 WATCH FUNCTION");
                if (newValue !== undefined) {
                    var aDate = new Date(newValue.date);
                    var formattedDate = aDate.getMonth() + "/" + 
                                        aDate.getDate() + "/" +
                                        aDate.getFullYear();
                    
                    
                    chart.series[0].setData(newValue.values,false);
                    
                    chart.setTitle({text: "Demand Profile " + formattedDate},{},false);
                    console.log ("SET DEMAND TITLE WITH DATE");
                    chart.xAxis[0].setCategories($rootScope.intervalTimes,false);
                    if(newValue.temps !== undefined){
                        chart.series[1].setData(newValue.temps,false,true);
                        chart.series[1].color = Highcharts.getOptions().colors[2];
                    }else if (chart.series[1] != undefined)
                    {
                        chart.series[1].setData(null, false, true);
                    }
                    chart.yAxis[0].update({max: Math.ceil(Energy.maxKwValue/100)*100 },false);
                    chart.redraw();
                    
                }
            }, true);
        }
    }
})