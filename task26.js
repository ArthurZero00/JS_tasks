/*
Write a function that takes two or more arrays and returns an array of tuples. 
Each tuple contains the elements at the same index from each input array. Stop when the shortest array runs out.
Input: ([1,2], ['a','b'], [true,false])
Output: [[1,'a',true], [2,'b',false]]
*/


function tupleMaker(arr1, arr2, arr3){
    arrOfTuples = [];
    let size;
if(arr1.length < arr2.length && arr1.length < arr3.length){
    size = arr1.length;
}else if(arr2.length < arr1.length && arr2.length < arr3.length){
    size = arr2.length;
}else{
    size = arr3.length;
}
    for(let i = 0; i < size; i++){
        let tuples = [];
        tuples.push(arr1[i], arr2[i], arr3[i]);
        arrOfTuples.push(tuples);
    }

    
return arrOfTuples;
}

console.log(tupleMaker([1,2,3], ['a','b', 'c', ], [true,false,true]));