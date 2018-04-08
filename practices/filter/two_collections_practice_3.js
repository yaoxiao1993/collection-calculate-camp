'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var result_collection = [];
  for(var i in collection_a){
    for(var j in collection_b){
      if(collection_a[i] % collection_b[j] === 0){
        result_collection.push(collection_a[i]);
        break;
      }
    }
  }
return result_collection;
  //在这里写入代码
}

module.exports = choose_divisible_integer;
