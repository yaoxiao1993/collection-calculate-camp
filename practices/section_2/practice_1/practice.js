function count_same_elements(collection) {
  var result_collection = [];
  var obj = {};
  for(var i in collection){
    if(!obj[collection[i]]){
      obj[collection[i]] = 1;
    }else{
      obj[collection[i]] ++;
    } 
  }
  for(var i in obj){
    var obj_in_array = {};
    obj_in_array.key = i;
    obj_in_array.count = obj[i];
    result_collection.push(obj_in_array);
  }
  return result_collection;

  // var result_collection =[];
  // for(var i in collection){
  //   if(!result_collection[collection[i]]){
  //     result_collection[collection[i]]={};
  //     result_collection[collection[i]].key = collection[i];
  //     result_collection[collection[i]].count =1;
  //   }else{
  //     result_collection[collection[i]].count++;
  //   }
  // }

  // console.log(result_collection);
  // return result_collection;
  
  //在这里写入代码
}

module.exports = count_same_elements;
