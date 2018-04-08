'use strict';

function get_integer_interval_2(number_a, number_b) {
  var collection = new Array();
  var i;
  if(number_a <= number_b){
    for( i = number_a; i <= number_b; i ++){
      if(i % 2 == 0){
        collection.push(i);
      }
    }
  }else{
    for(i = number_a; i >= number_b; i --){
      if(i % 2 == 0){
        collection.push(i);
      }
    }
  }
  return collection;
}

module.exports = get_integer_interval_2;
