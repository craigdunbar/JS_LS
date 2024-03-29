/*
# -----------------------INSTRUCTIONS------------------------
Palindromic Strings (Part 2)
Write another function that returns true if the string passed 
as an argument is a palindrome, or false otherwise. 
This time, however, your function should be case-insensitive, 
and should ignore all non-alphanumeric characters. 
If you wish, you may simplify things by calling the isPalindrome 
function you wrote in the previous exercise.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: ignore case and non-alphanumeric characters

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
# ----------------------------ALGO---------------------------
# remove all non-alphabetic characters using replace()
convert strings to lowercase
compare using isPalindrome function from last exercise
*/

function isRealPalindrome(str) {
  str = str.replace(/[^A-Z0-9]/gi, '').toLowerCase();
  console.log(str);
  return isPalindrome(str);
}
function isPalindrome(str) {
  let reverseStr = str.split('').reverse().join('');
  return str === reverseStr ? true : false
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false