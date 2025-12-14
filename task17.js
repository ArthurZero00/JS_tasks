const readlineSync = require('readline-sync');

const ageStr = readlineSync.question('How old are you?\n');
const age = parseInt(ageStr);

if (isNaN(age) || age <= 0) {
  console.log("Enter a valid age");
} else if (age < 18) {
  console.log("You are a minor");
} else if (age < 65) {
  console.log("You are a major");
} else {
  console.log("You are a senior citizen");
}
