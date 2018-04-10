function create_updated_collection(collection_a, object_b) {
  var result_collection = [];
  var obj = {};
  for(var i in collection_a){
    if(!obj[collection_a[i]]){
      obj[collection_a[i]] = 1;
    }else{
      obj[collection_a[i]] ++;
    } 
  }
  for(var i in obj){
    var obj_in_array = {};
    obj_in_array.key = i;
    obj_in_array.count = obj[i];
    result_collection.push(obj_in_array);
  }

  for(var i in result_collection){
    for(var j in object_b.value){
      if(result_collection[i].key === object_b.value[j]){
        result_collection[i].count -= Math.floor(result_collection[i].count / 3);
        break;
      }
    }
  }
  return result_collection;
  //在这里写入代码
}

module.exports = create_updated_collection;
