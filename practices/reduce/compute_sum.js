'use strict';

function calculate_elements_sum(collection) {
  var sum = 0;
  for(var i in collection){
    sum += collection[i];
  }
  return sum;
  //在这里写入代码
}

module.exports = calculate_elements_sum;

