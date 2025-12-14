/*
Task2: Given an array of user IDs, e.g. ['u1', 'u2', 'u3'], 
build an object users where each key is a user ID and its value is an object 
with a score property initialized to 0. Then:
Increase the score of u2 by 10 using bracket notation.
Add a completely new user key based on a variable value, e.g. let newId = 'u4'.
*/
const arr = ['u1', 'u2', 'u3'];

const users = {};
for (const id of arr) {
    users[id] = { score: 0 };
}

users['u2'].score += 10;

let newId = 'u4';
users[newId] = { score: 0 };

arr.push(newId);

console.log(users);
console.log(arr);