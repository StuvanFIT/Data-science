
var vg_1 = "top_100_stadiums.vg.json";
var vg_2 = "stadiums_per_capita.vg.json";
var vg_3 = "ticket_prices.vg.json";
var vg_4 = "average_attendance.vg.json";
var vg_5 = "future_stadiums.vg.json";
var vg_6 = "world_cup_hosts.vg.json";



vegaEmbed("#geo_map", vg_1).then(function(result) {
    
    result.view;

}).catch(console.error);

vegaEmbed("#stadiums_per_capita", vg_2).then(function(result) {

    result.view;

}).catch(console.error);


vegaEmbed("#ticket_prices", vg_3).then(function(result) {
    
    result.view;

}).catch(console.error);

vegaEmbed("#average_attendance", vg_4).then(function(result) {
    
    result.view;

}).catch(console.error);

vegaEmbed("#future_stadiums", vg_5).then(function(result) {
    
    result.view;

}).catch(console.error);

vegaEmbed("#world_cup_hosts", vg_6).then(function(result) {
    
    result.view;

}).catch(console.error);




