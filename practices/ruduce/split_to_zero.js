'use strict';

function spilt_to_zero(number, interval) {
  var collection = [];
  collection.push(number);
  while(number > 0){
    number = (number * 100 - interval * 100) / 100;  
    collection.push(number);
  }
  return collection;
  //在这里写入代码
}

module.exports = spilt_to_zero;
