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

# Input: 
# Output: 
# ---------------------------RULES---------------------------

# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
# ----------------------------ALGO---------------------------
# same as before but case insenstivite
*/
function isRealPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]/gi, '')
  return isPalindrome(str);
}
function isPalindrome(str) {
  let reverse = str.split('').reverse().join('')
  return str === reverse ? true : false
}
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false