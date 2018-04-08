function collect_same_elements(collection_a, object_b) {
  var result_collection = [];
  for(var i in collection_a){
    for(var j in object_b['value']){
      if(collection_a[i] === object_b['value'][j]){
        result_collection.push(collection_a[i]);
        break;
      }
    }
  }
  return result_collection;
  //在这里写入代码
}

module.exports = collect_same_elements;
