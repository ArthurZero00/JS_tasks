/*
Write a function deepClone(obj) that creates a deep copy of a nested object or array.
*/

const obj = {
    name: "Arthur",
    age: 29,
};

// const newObj = obj;
// newObj.name = "Sergo";
console.log(obj);
// console.log(newObj);

function deepClone(obj){
    const copyName = obj.name + " Copy";
    const copyAge = obj.age + 2;
    const copyObj = {
        name: copyName,
        age: copyAge
    };
    return copyObj
}

console.log(deepClone(obj));
console.log(obj);

