'use strict';
var map_to_four_multiples_add_one = function(collection){
  var result_collection = [];
  for(var i in collection){
    result_collection.push(collection[i] * 4 + 1);
  }
  return result_collection;
};

module.exports = map_to_four_multiples_add_one;
