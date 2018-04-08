'use strict';

function compute_median(collection) {
  collection.sort(function(a,b){return a-b});
  var lowMiddle = Math.floor( (collection.length - 1) / 2);
  var highMiddle = Math.ceil( (collection.length - 1) / 2);
  return ((collection[lowMiddle] + collection[highMiddle]) / 2);
  //在这里写入代码
}

module.exports = compute_median;


