/*
Given an array of async functions, implement a function runSequential(tasks) that executes them one 
after another and collects the results.
*/

async function one() {
    console.log("Hello, ");
}

async function two() {
    console.log("World!");
}

const funcArray = [ one, two ];


function runSequential(tasks){
    tasks.forEach((task) => task());
}
runSequential(funcArray);
