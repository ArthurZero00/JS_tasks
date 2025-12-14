/*
Create a memoize(fn) function that caches results of function 
calls to avoid repeated calculations.
*/

function outerFunc(){
    let counter = 0;
    function innerFunc(){
    counter++
    return counter;
    }
return innerFunc;
}
const count = outerFunc();

console.log(count());
console.log(count());
console.log(count());



