'use strict';

function average_uneven(collection) {
  var sum = 0;
  var count = 0;
  for(var i in collection){
    if(collection[i] % 2 === 1){
      sum += collection[i];
      count ++;
    }
  }
  return sum / count;
  //在这里写入代码
}

module.exports = average_uneven;
