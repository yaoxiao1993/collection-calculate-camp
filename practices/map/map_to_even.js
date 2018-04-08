'use strict';
function map_to_even(collection){
  var result_collection = [];
  for(var i in collection){
    result_collection.push(collection[i] * 2);
  }
  return result_collection;
}
module.exports = map_to_even;
