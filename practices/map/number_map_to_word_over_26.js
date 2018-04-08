'use strict';
var number_map_to_word_over_26 = function(collection){
  var result_collection = [];
  for(var i in collection){
    if(collection[i] <= 26){
      result_collection.push(String.fromCharCode(96 + collection[i]));
    }else if(collection[i] > 26){
      result_collection.push(String.fromCharCode(96 + parseInt((collection[i]  - 1) / 26)) + String.fromCharCode(96 + collection[i] - parseInt((collection[i] - 1) / 26) * 26));
    }
  }
  return result_collection;
};

module.exports = number_map_to_word_over_26;
