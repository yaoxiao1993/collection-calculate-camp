'use strict';
var is_exist_element = function(collection,element){
    var even_index_collection = [];
    for(var i in collection){
        if(i % 2 === 0){
            even_index_collection.push(collection[i]);
        }
    }

    var count = 0;
    for(var i in even_index_collection){
        if(even_index_collection[i] === element){
            return true;
            break;
        }else if(even_index_collection[i] !== element){
            count ++;
        }
    }

    if(count === even_index_collection.length){
        return false;
    }

};

module.exports = is_exist_element;
