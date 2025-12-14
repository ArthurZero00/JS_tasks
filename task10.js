/*
Task 10: Join an Array into a String
Description:
Join an array of words into a single string separated by spaces. 
Print the resulting string.
 */


let str = "This is the beginning ";
const arr = ["of", "everything", "and", "that", "is", "it."];
str += arr.join(" ");
console.log(str);