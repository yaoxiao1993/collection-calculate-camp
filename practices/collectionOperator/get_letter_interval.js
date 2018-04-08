'use strict';

function get_letter_interval(number_a, number_b) {
  var collection = new Array();
  var i;
  if(number_a <= number_b){
    for(i = number_a; i <= number_b; i ++){
      collection.push(String.fromCharCode(96 + i));
    }
  }else if(number_a > number_b){
    for(i = number_a; i >= number_b; i --){
      collection.push(String.fromCharCode(96 + i));
    }
  }
  return collection;
  
}

module.exports = get_letter_interval;
