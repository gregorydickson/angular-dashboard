
 <?php 
 error_log(print_r($_POST, true));
 error_log(print_r($_GET, true));
header('Content-Type: application/json');
echo '{"facilities":[{"id":1957,"meters":[{"id":2144,"desc":"Meter #1"},{"id":2145,"desc":"Meter #2"}],"name":"Arena"}],"pages":[{"name":"LP","views":[{"name":"Favorite Profile","timeperiod":"last30days","meters":[2144],"default":true},{"name":"Next Profile","timeperiod":"last30days","meters":[1434,5678],"default":false}]}]}' 
?> 
