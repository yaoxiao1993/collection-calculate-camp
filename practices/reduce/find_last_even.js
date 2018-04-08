'use strict';

function find_last_even(collection) {
  collection.reverse();
  for(var i in collection){
    if(collection[i] % 2 === 0){
      return collection[i];
      break;
    }
  }
  //在这里写入代码
}

module.exports = find_last_even;
