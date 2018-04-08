'use strict';

function choose_multiples_of_three(collection) {
  var result_collection = [];
  for(var i in collection){
    if(collection[i] % 3 == 0){
      result_collection.push(collection[i]);
    }
  }
return result_collection;
}

module.exports = choose_multiples_of_three;
