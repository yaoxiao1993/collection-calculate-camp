function count_same_elements(collection) {
  var result_collection = [];
  var obj = {};
  for(var i in collection){
    var num = collection[i].match(/[\d]+/);
    if(num){
      var letter = collection[i].match(/[a-z]+/);
      collection[i] = letter;
      for(var j = 1; j < num; j++){
        collection.push(collection[i]);
      }
    }
  }

  for(var i in collection){
    if(!obj[collection[i]]){
      obj[collection[i]] = 1;
    }else{
      obj[collection[i]] ++;
    } 
  }
  for(var i in obj){
    var obj_in_array = {};
    obj_in_array.name = i;
    obj_in_array.summary = obj[i];
    result_collection.push(obj_in_array);
  }
  return result_collection;
  //在这里写入代码
}
module.exports = count_same_elements;
