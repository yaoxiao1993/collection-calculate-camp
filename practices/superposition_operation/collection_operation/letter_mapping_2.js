'use strict';

function average_to_letter(collection) {
  var result_collection = [];
  var sum = 0;
  for(var i in collection){
    sum += collection[i];
    var result_letter = String.fromCharCode(96 + Math.ceil(sum / collection.length));
  }
  return result_letter;
  //在这里写入代码
}

module.exports = average_to_letter;

