'use strict';
var single_element = function(collection){
    //将第偶数个元素取出来放到集合A，并将集合A排序
    var even_index_collection = [];
    var result_collection = [];
    for(var i in collection){
        if(i % 2 === 1){
            even_index_collection.push(collection[i]);
        }
    }

    //把集合A中重复的元素，放到集合B里面
    var temp = [];
    for(var i in even_index_collection){
        if(result_collection.indexOf(even_index_collection[i]) === -1){
            result_collection.push(even_index_collection[i]);
        }else{
            temp.push(even_index_collection[i]);
        }
    }

    for(var i in temp){
        for(var j in result_collection){
            if(temp[i] === result_collection[j]){
                result_collection.splice(j,1);
                break;
            }
        }
    }
        
    return result_collection;
};
module.exports = single_element;

