/*
Task 5: Write a function that takes any array and returns a new array containing only 
the first occurrence of each value, in original order.
Input: [1, 2, 2, 3, 1]
Output: [1, 2, 3]
 */

const arr = [1, 2, 2, 3, 1];
let newArr =[];
for(let item of arr){
    if(!newArr.includes(item)){
    newArr.push(item);
}}

console.log(newArr);