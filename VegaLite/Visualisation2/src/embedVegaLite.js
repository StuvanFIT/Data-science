
var vg_1 = "top_100_stadiums.vg.json";
var vg_2 = "stadiums_per_capita.vg.json";



vegaEmbed("#geo_map", vg_1).then(function(result) {
    
    result.view;

}).catch(console.error);

vegaEmbed("#stadiums_per_capita", vg_2).then(function(result) {
    
    result.view;

}).catch(console.error);
