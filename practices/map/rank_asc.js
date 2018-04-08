'use strict';
var rank_asc = function(collection){
  var temp ;
  for(var i = 0; i <= collection.length-1; i ++){
    for(var j = i + 1; j <= collection.length-1; j ++){
      if(collection[j] > collection[i]){ 
        temp = collection[j];
        collection[j] = collection[i];
        collection[i] =temp;
    }
    
    }
  }
  return collection;
};

module.exports = rank_asc;
