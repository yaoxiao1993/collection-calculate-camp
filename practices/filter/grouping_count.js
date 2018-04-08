'use strict';

function grouping_count(collection) {
  var obj = {};
  for(var i in collection){
    if(!obj[collection[i]]){
      obj[collection[i]] = 1;
    }else{
      obj[collection[i]] ++;
    }
  }
  return obj;

  //在这里写入代码
}

module.exports = grouping_count;
