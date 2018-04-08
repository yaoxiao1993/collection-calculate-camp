'use strict';

function double_to_one(collection) {
  var result_collection = [];
  for(var i in collection){
    if(typeof(collection[i]) === "object"){
      for(var j in collection[i]){
        if(result_collection.indexOf(collection[i][j]) === -1){
          result_collection.push(collection[i][j]);
        }
      }
    }else{
      result_collection.push(collection[i]);
    }
  }
return result_collection;
  //在这里写入代码
}

module.exports = double_to_one;
