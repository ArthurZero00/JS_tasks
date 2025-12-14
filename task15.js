/*Implement a function that takes a string and returns the character that appears most frequently.
*/

function mostFrequentChar(str) {
    if (str.length === 0) return null; 
  
    const freqMap = {};
  
    for (let char of str) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }
  
    let maxChar = null;
    let maxCount = 0;
  
    for (let char in freqMap) {
      if (freqMap[char] > maxCount) {
        maxCount = freqMap[char];
        maxChar = char;
      }
    }
  
    return maxChar;
  }
  
  
  console.log(mostFrequentChar("hello, world"));      

