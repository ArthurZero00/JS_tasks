/*
Task 7: Check if a String Contains a Substring
Description:
Check if the string message contains the word "world" and print true or false accordingly. 
*/
const str = "Hello from darkness";
const substr = "Hello";
if(str.match(substr) != null){
    console.log("True");
}else{
    console.log("False");
}

