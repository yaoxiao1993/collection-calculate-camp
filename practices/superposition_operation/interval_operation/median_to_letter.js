'use strict';

function median_to_letter(collection) {
  var lowMiddle = Math.floor( (collection.length - 1) / 2);
  var highMiddle = Math.ceil( (collection.length - 1) / 2);
  var middle = Math.ceil(((collection[lowMiddle] + collection[highMiddle]) / 2));

  if(middle <= 26){
    return String.fromCharCode(96 + middle);
  }else{
    return String.fromCharCode(96 + parseInt((middle - 1) / 26)) + String.fromCharCode(96 + middle - parseInt((middle - 1) / 26) * 26);
  }
  //在这里写入代码
}


module.exports = median_to_letter;
