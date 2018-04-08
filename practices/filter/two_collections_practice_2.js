'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var result_collection = [];
  for(var i in collection_a){
    var count = 0;
    for(var j in collection_b){
      if(collection_a[i] != collection_b[j]){
        count ++;
      }else{
        break;
      }
      if(count === collection_b.length){
        result_collection.push(collection_a[i]);
      }
    }
  }
return result_collection;
  //在这里写入代码
}

module.exports = choose_no_common_elements;
