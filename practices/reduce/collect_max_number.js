'use strict';

function collect_max_number(collection) {
  for(var i in collection){
    var max = collection[0];
    if(collection[i] > max){
      max = collection[i];
    }
  }
  return max;
  //在这里写入代码
}

module.exports = collect_max_number;
