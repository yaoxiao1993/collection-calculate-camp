'use strict';

function collect_min_number(collection) {
  var min = collection[0];
  for(var i in collection){
    if(collection[i] < min){
      min = collection[i];
    }
  }
  return min;
  //在这里写入代码
}

module.exports = collect_min_number;

