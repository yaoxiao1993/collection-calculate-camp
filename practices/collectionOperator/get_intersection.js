'use strict';

function get_intersection(collection_a, collection_b) {
  var collection = new Array();
  for(var i in collection_b){
    for(var j in collection_a){
      if(collection_b[i] === collection_a[j]){
        collection.push(collection_b[i]);
        break;
      }
    }
  }
  return collection;
}

module.exports = get_intersection;
