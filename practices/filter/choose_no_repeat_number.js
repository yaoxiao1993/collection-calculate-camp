'use strict';

function choose_no_repeat_number(collection) {
  var result_collection = [];
  for(var i in collection){
    if(result_collection.indexOf(collection[i]) == -1){
      result_collection.push(collection[i]);
    }
  }
  return result_collection;
  
  //在这里写入代码
}

module.exports = choose_no_repeat_number;
