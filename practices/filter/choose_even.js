'use strict';

function choose_even(collection) {
  var result_collection = new Array();
  for(var i in collection){
    if(collection[i] % 2 == 0){
      result_collection.push(collection[i]);
    }
  }
  return result_collection;
}

module.exports = choose_even;
