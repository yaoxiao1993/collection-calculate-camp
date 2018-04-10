'use strict';
var even_group_calculate_average = function(collection){
    //找出原数组中第偶数个元素组成的数组A
    var odd_index_collection = [];
    for(var i in collection){
        if(i % 2 === 1){
            odd_index_collection.push(collection[i]);
        }
    }

    console.log(odd_index_collection);

    //找出A中的偶数元素组成的数组B,若A中没有偶数元素，返回[0]
    var even_number_odd_index_collection = [];
    var count = 0;
    for(var i in odd_index_collection){
        if(odd_index_collection[i] % 2 === 0){
            even_number_odd_index_collection.push(odd_index_collection[i]);
            count ++;
        }
        if(count === 0){
            even_number_odd_index_collection.push(0);
        }
    }
    console.log(even_number_odd_index_collection)


    //计算B中每个元素的位数，并组成对象C，格式{123:3, 456:3, 78:2}
    var count_of_number = {};
    for(var i in even_number_odd_index_collection){
        var count = 0;
        for(var j = even_number_odd_index_collection[i]; j > 0; ){
            j = parseInt(j / 10);
            count ++;
        }
        count_of_number[even_number_odd_index_collection[i]] = count;
    }

    console.log(count_of_number)

    //将B中的每个元素按照数字位数分组,相同位数放到一个小集合，再把小集放到同一个大的集合D
    var newArr = [],
    tempArr = [];
    //for(var i in even_number_odd_index_collection){
    for(var i =0; i <= even_number_odd_index_collection.length - 1; i++){
        if(count_of_number[even_number_odd_index_collection[i]] === count_of_number[even_number_odd_index_collection[i+1]]){
            tempArr.push(even_number_odd_index_collection[i]);
        }else{
            tempArr.push(even_number_odd_index_collection[i]);
            newArr.push(tempArr.slice(0));
            tempArr.length = 0;
        }
    }

    console.log(newArr)
    
    //计算集合D中，每个由相同元素组成的小集合中元素的平均数，并把这些平均数组成集合E
    var result_collection = [];
    for(var i in newArr){
        var sum = 0;
        for(var j in newArr[j]){
            sum = sum + newArr[i][j];
            var avg = sum / newArr[i].length;
        }
        result_collection.push(avg);  
    }
    console.log(result_collection)

    return result_collection;

};

var collection_a = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];
var collection_b = [1, 3, 5, 7, 33, 55, 31, 555, 777];
var collection_c = [344, 256, 55, 777, 322, 180];
even_group_calculate_average (collection_a);

//module.exports = even_group_calculate_average;
