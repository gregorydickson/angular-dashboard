<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Angular Dashboard</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="scripts/lib/angular-ui-tree/dist/angular-ui-tree.min.css" />
        <link rel="stylesheet" type="text/css" href="styles/style.css" />

        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.js"></script>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

        <script src="scripts/lib/angular/angular.min.js"></script>
        <script src="scripts/lib/angular-route/angular-route.min.js"></script>
        <script src="scripts/lib/angular-ui-tree/dist/angular-ui-tree.js"></script>
        <script src="scripts/lib/highcharts-ng/dist/highcharts-ng.js"></script>

        <script src="http://code.highcharts.com/highcharts.js"></script>
        <script src="http://code.highcharts.com/modules/exporting.js"></script>
        <script src="http://code.highcharts.com/highcharts-more.js"></script>
        <script src="http://code.highcharts.com/modules/heatmap.js"></script>

        <script src="scripts/app.js"></script>
        <script src="scripts/directives.js"></script>
        <script src="scripts/controllers.js"></script>

    </head>
  
    <body ng-app="myApp">       
		<div class="mainarea" ng-view></div>       
    </body>
</html>