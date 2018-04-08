'use strict';

function compute_chain_median(collection) {
  /*var i = 0;
  var sum = 0;
  var count = 0;
  while(i <= collection.length - 1){
    sum += Number(collection.charAt[i]);
    i += 3;
    count ++;
  }
  return sum / count;*/
  var ary = collection.split('->').sort(function (a,b) {
    return a - b;
    });
  var lowMiddle = Math.floor((ary.length - 1) / 2);
  var highMiddle = Math.ceil((ary.length - 1) / 2);
  return (Number(ary[lowMiddle]) + Number(ary[highMiddle])) / 2;
  //在这里写入代码
}

module.exports = compute_chain_median;
