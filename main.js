'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  // chair
  // egg //

  // [a, r, i, c, h, a, y]


   const pigLatin = (word) => {
   // Case of starting with consonant
   // remove all consonants before first vowel

  // spit word into an array
  
  const array1 = ['a', 'r', 'i', 'c', 'h', 'a', 'y'];

  array1.forEach(element => console.log(element));
  
  
  // expected output: "a"
  // expected output: "b"
  // expected output: "c"
  // loop through our array
  // at each index check if its vowel or consonate
  // what are vowels 'aeiou'
  // if consonate <--- SKIP
  // if vowel && index > 0   take all consonates to up until the first vowel
  // then "concat" them to the end of the word
  // then also "concat" them to the end of array
  // join your array back 
  // break out of loop
 
 // Case of starting with vowel // again what is a vowel 
 // if index === vowel
   // "concat" "yay" to the end of word.

    // Return translated word


    // Return methods ""



};



// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
