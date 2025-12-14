/*
Write a script that logs the value of a var‑declared variable before and after 
its declaration and initialization at the top level. Explain why the first log 
prints undefined and not a ReferenceError.
*/

console.log(name);
var name = "Arthur";
console.log(name);

/*
    The first log is undifined because when var is declared 
    its going up the code but not the value, It is automatically 
    assigned as undefined. After the first log it is now assigned 
    to value "Arthur" and correctly logged after it.

    looks like this:

    var name = undifined;  
    console.log(name);   // undefined
    name = "Arthur";
    console.log(name);  // Arthur
*/