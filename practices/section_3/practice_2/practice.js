function create_updated_collection(collection_a, object_b) {
  var result_collection =[];
  for(var i in collection_a){
    for(var j in object_b.value){
      if(collection_a[i].key === object_b.value[j]){
        collection_a[i].count -= Math.floor(collection_a[i].count / 3);
        break;
      }
    }
  }
  return collection_a;
  //在这里写入代码
}

module.exports = create_updated_collection;
