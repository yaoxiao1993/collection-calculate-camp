'use strict';
var number_map_to_word = function(collection){
  var result_collection = [];
  for(var i in collection){
    result_collection.push(String.fromCharCode(96 + collection[i]));
  }
  return result_collection;
};

module.exports = number_map_to_word;
