function count_same_elements(collection) {
  var obj = {key:'a', count:0};
  var result_collection = [];
  for(var i in collection){
    if(collection[i] === obj['key']){
      obj['count'] ++;
    }else{
      result_collection.push(obj);
      obj['key'] = collection[i];
      count = 0;
    }
    
  }
  
  return obj;
  //在这里写入代码
}

module.exports = count_same_elements;
