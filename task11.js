/*
Implement a function compose(f, g) that combines two functions 
so that the output of one becomes the input of the other.
*/

function first(num) {
    return num * 2;  
}

function second(num) {
    return num + 1;  
}

function compose(f , g){
    return function (num){
        return f(g(num));
    }
}

console.log(compose(first, second)(5));