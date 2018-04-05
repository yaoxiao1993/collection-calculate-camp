'use strict';

function collect_all_even(collection) {
  var collection_b;
  for(var i in collection){
    if(collection[i] % 2 == 0){
      collection_b.push(collection[i]);
    }
  }//在这里写入代码
  return collection_b;
  console.log(collection_b);
}

//module.exports = collect_all_even;
