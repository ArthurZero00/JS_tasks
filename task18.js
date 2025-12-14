/* Task 3: Loop Structures
Objective: Use loops to execute repetitive tasks.
Instructions:
Create a program that prints the numbers from 1 to 20 using a for loop.
Write a while loop that outputs only the even numbers from 1 to 20.
Implement a script with a do-while loop that continues to ask the user for a number until they enter zero.
 */

const readlineSync = require('readline-sync');


for(let i = 1; i <= 20; ++i){
    console.log(i);
}
let i = 0;
while(i <= 20){
i += 2;
console.log(i);
}
let num = 0;
do{
    
    const numStr = readlineSync.question('Enter a 0 number\n');
    num = parseInt(numStr);

}while(num !== 0);
