'use strict';
var even_asc_odd_desc = function(collection){
    var result_collection = [];
    var even_collection = [];
    var odd_collection = [];
    for(var i in collection){
        if(collection[i] % 2 === 0){
            even_collection.push(collection[i]);
        }else{
            odd_collection.push(collection[i]);
        }
    }
    even_collection.sort(function(a,b){return a-b});
    odd_collection.sort(function(a,b){return b-a});
    result_collection = even_collection.concat(odd_collection);
    return result_collection;

};
module.exports = even_asc_odd_desc;
