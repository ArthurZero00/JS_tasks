/*
Create a function that splits an array into groups of length size. 
The last chunk may be shorter if elements run out.
Input: (['a','b','c','d','e'], 2)
Output: [['a','b'], ['c','d'], ['e']]
*/



function arrSlicer(array, len){
    let newArr = [];

    for(let i = 0; i < array.length; i = i + len){
        newArr.push(array.slice(i, i + len))
    }
    return newArr;
}
console.log(arrSlicer(['a','b','c','d','e'], 3));
//console.log(newArr);