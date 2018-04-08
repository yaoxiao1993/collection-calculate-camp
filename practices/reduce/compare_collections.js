'use strict';

function compare_collections(collection_a, collection_b) {
  for(var i in collection_a){
    if(collection_a[i] === collection_b[i] && collection_a.length === collection_b.length)
      return true;
  }
  //在这里写入代码
}

module.exports = compare_collections;


