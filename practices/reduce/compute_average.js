'use strict';

function compute_average(collection) {
  var sum = 0;
  for(var i in collection){
    sum = sum + collection[i];
  }
  return sum / collection.length;
  //在这里写入代码
}

module.exports = compute_average;

