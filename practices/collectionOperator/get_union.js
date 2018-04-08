'use strict';

function get_union(collection_a, collection_b) {
  var collection = new Array();
  for(var i in collection_b){
    var count = 0;
    for(var j in collection_a){
      if(collection_b[i] != collection_a[j]){
        count ++;
      }else{
        break;
      }
    }
    if(count == collection_a.length){
      collection_a.push(collection_b[i]);
    }
  }
return collection_a;
}

module.exports = get_union;

