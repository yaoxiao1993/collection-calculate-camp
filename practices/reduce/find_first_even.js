'use strict';

function find_first_even(collection) {
  for(var i in collection){
    if(collection[i] % 2 === 0){
      return collection[i];
      break;
    }
  }
  //在这里写入代码
}

module.exports = find_first_even;

