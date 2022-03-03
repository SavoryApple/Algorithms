
/*
Sum To One Digit
Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.
Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 59437 // -> 28 --> 10 --> 1


/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 * 
 * 1. convert integer to string
 * 2. make for loop to loop thru each index and addd it to count vasriable
 * 3. repeat if necessary
 * 4. convert count varaible back to integer
 */
 function sumToOneDigit(num) {
  
    var text = num.toString();
    var strings = text.split('');
    console.log(strings)
    if(strings[0] == 0){
        return ''
    }
    else if (strings.length == 1) {
        return strings[0]
    }
    return strings[0] + sumToOneDigit(strings.slice(1))
    }
    
    console.log(sumToOneDigit(num3))

module.exports = { sumToOneDigit };

function sumToOneDigit(num){
    if (num < 10){
      return num
    }
    else{
      var text = num.toString();
      var strings = text.split('');
      var num = 0;
      for (let i = 0; i < strings.length; i++){
        num += parseInt(strings[i]);
      }
    }
    return sumToOneDigit(num)
  }
  
  console.log(sumToOneDigit(num3))

/*****************************************************************************/

// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129
/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function generateAnagrams(str) {}

module.exports = { generateAnagrams };

/*****************************************************************************/