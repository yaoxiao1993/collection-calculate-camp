'use strict';

function hybrid_operation_to_uneven(collection) {
  var result_collection = [];
  for(var i in collection){
    if(collection[i] % 2 === 1){
      result_collection.push(collection[i] * 3 + 2);
    } 
  }
  return result_collection;
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

