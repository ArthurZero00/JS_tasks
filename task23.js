/*
Task 4: Write a function deepClone(obj) that takes any object (which may contain nested objects and arrays) and 
returns a new object with the same structure and values, but with no shared references. Test it by:
Cloning an object with at least two levels of nesting.
Mutating the nested values in the clone and showing the original remains unchanged.
*/

const obj = {
    name : {
        n: "help",

    }
}

const obj2 = structuredClone(obj);

console.log(obj2);