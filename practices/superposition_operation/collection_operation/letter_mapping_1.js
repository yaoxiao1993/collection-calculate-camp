'use strict';

function even_to_letter(collection) {
  var result_collection = [];
  for(var i in collection){
    if(collection[i] % 2 === 0){
      result_collection.push(String.fromCharCode(96 + collection[i]));
    }
  }
  return result_collection;
  //在这里写入代码
}

module.exports = even_to_letter;
