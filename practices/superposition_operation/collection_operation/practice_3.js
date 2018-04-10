'use strict';

function hybrid_operation_to_uneven(collection) {
  var sum = 0;
  for(var i in collection){
    if(collection[i] % 2 === 1){
      sum = sum + collection[i] * 3 + 5;
  }
}
return sum;
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

