'use strict';

function amount_even(collection) {
var sum = 0;
for(var i in collection){
  if(collection[i] % 2 === 0){
    sum += collection[i];
  }
}
return sum;
  //在这里写入代码
}

module.exports = amount_even;
