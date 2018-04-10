function create_updated_collection(collection_a, object_b) {
  var result_collection = [];
  var obj = {};
  //将带符号和数字的元素转换成多个重复元素，比如"d-5"这个元素转换成5个"d"元素
  for(var i in collection_a){
    var num = collection_a[i].match(/[\d]+/);
    if(num){
      var letter = collection_a[i].match(/[a-z]+/);
      collection_a[i] = letter;
      for(var j = 1; j < num; j++){
        collection_a.push(collection_a[i]);
      }
    }
  }

  //将重复元素和元素个数以对象形式存储，格式为{a:3,b:4,c:5}
  for(var i in collection_a){
    if(!obj[collection_a[i]]){
      obj[collection_a[i]] = 1;
    }else{
      obj[collection_a[i]] ++;
    } 
  }

  //将上文中对象转成对象数组C，格式为[{key:a,count:3},{key:b,count:4},{key:c,count:5}]
  for(var i in obj){
    var obj_in_array = {};
    obj_in_array.key = i;
    obj_in_array.count = obj[i];
    result_collection.push(obj_in_array);
  }

  //将C集合中的元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count，满3减1，输出减过之后的新C集合
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
