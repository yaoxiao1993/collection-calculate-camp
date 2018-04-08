'use strict';
var map_to_three_multiples = function(collections){
  var result_collection = [];
  for(var i in collections){
    result_collection.push(collections[i] * 3);
  }
  return result_collection;
};

module.exports = map_to_three_multiples;
