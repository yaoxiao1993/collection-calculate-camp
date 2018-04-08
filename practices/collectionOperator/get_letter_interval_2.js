'use strict';

function get_letter_interval_2(number_a, number_b) {
  var collection = [];
  var i;
  if(number_a <= number_b){
    for(i = number_a; i <= number_b; i ++){
      if(i <= 26){
        collection.push(String.fromCharCode(96 + i));
      }else if(i > 26){
        collection.push(String.fromCharCode(96 + (i - 1 ) / 26 ) + String.fromCharCode(96 + i - parseInt((i - 1) / 26) * 26));       
      }   
    }
  }
  else{
    for(i = number_a; i >= number_b; i --){
      if(i <= 26){
        collection.push(String.fromCharCode(96 + i % 27));
      }else if(i > 26){
        collection.push(String.fromCharCode(96 + (i - 1 ) / 26 ) + String.fromCharCode(96 + i - parseInt((i - 1)/ 26) * 26));
      }
    }
  }  
  return collection;
}

module.exports = get_letter_interval_2;

