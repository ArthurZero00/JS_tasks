/* Task 4: Combining Elements
Objective: Utilize variables, loops, and conditionals together.
Instructions:
Create a game where the user has to guess a number between 1 and 10.
Use a variable to store the correct answer, initialized to a random number between 1 and 10.
Use a while loop to repeatedly prompt the user for their guess:
If the guess is too high, output "Too high!"
If the guess is too low, output "Too low!"
If the guess is correct, output "Congratulations! You guessed the number!" and exit the loop
 */
const readlineSync = require('readline-sync');

let randomNum = Math.floor(Math.random() * 10) + 1;

let guess;

while (true) {
  
  const numStr = readlineSync.question('Guess the number (1-10): ');
  guess = parseInt(numStr);

  if (isNaN(guess)) {
    console.log("Please enter a valid number!");
    continue;
  }

  if (guess < randomNum) {
    console.log("Too low!");
  } else if (guess > randomNum) {
    console.log("Too high!");
  } else {
    console.log("Congratulations! You guessed the number!");
    break; 
  }
}