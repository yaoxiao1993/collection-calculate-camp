'use strict';
var calculate_median = function(collection){
    var even_collection = [];
    for(var i in collection){
        if(i % 2 === 1){
            even_collection.push(collection[i]);
        }
    }
    var highMiddle = Math.ceil((even_collection.length - 1) / 2);
    var lowMiddle = Math.floor((even_collection.length - 1) / 2);
    var middle = (even_collection[highMiddle] + even_collection[lowMiddle]) / 2;
    return middle;

};
module.exports = calculate_median;
