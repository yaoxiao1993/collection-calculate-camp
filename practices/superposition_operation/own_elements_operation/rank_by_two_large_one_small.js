'use strict';
function rank_by_two_large_one_small(collection){
  collection.sort(function(a,b){return a-b});
  for(var i = 0; i < collection.length - 3; i += 3){
    var temp = collection[i];   
    collection[i] = collection[i+1];
    collection[i+1] = collection[i+2];
    collection[i+2] = temp;
  }

  return collection;
  //这里写代码。。。
}

module.exports = rank_by_two_large_one_small;
