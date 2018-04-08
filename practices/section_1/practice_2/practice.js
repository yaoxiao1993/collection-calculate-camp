function collect_same_elements(collection_a, collection_b) {
  var result_collection = [];
  for(var i in collection_a){
    for(var j in collection_b){
      for(var k in collection_b[j]){
        if(collection_a[i] === collection_b[j][k]){
          result_collection.push(collection_a[i]);
          break;
        }
      }
    }
  }
  return result_collection;
  //在这里写入代码
}

module.exports = collect_same_elements;
