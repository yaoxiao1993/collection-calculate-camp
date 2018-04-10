'use strict';
function one_add_next_multiply_three(collection){
  var result_collection = [];
  for(var i = 0; i < collection.length - 1; i ++){
    result_collection.push((collection[i] + collection[i + 1]) * 3);
  }
  return result_collection;
}
module.exports = one_add_next_multiply_three;
