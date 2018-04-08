'use strict';

function choose_common_elements(collection_a, collection_b) {
  var result_collection = [];
  for(var i in collection_a){
    for(var j in collection_b){
      if(collection_b[j] === collection_a[i]){
        result_collection.push(collection_b[j]);
        break;
      }
    }
  }
return result_collection;
  //在这里写入代码
}

module.exports = choose_common_elements;
