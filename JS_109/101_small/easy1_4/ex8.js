/*
# -----------------------INSTRUCTIONS------------------------
Leap Years
Write a function that takes any year greater than 0 as input 
and returns true if the year is a leap year or false if it is not

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: leap year is any year evenly divisiable by 4
            unless the year is also divisible by 100. 
            if divisable by 100 but divisable by 400

# Implicit: 

# --------------------------EXAMPLES-------------------------

# ----------------------------ALGO---------------------------
# if the year % 400 is 0 or the year % 4 is 0 
-return true
*/
function isLeapYear(year) {
  if (year % 400 === 0|| (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2016) === true);
console.log(isLeapYear(2015) === false);
console.log(isLeapYear(2100) === false);
console.log(isLeapYear(2400) === true);
console.log(isLeapYear(240000) === true);
console.log(isLeapYear(240001) === false);
console.log(isLeapYear(2000) === true);
console.log(isLeapYear(1900) === false);
console.log(isLeapYear(1752) === true);
console.log(isLeapYear(1700) === false);
console.log(isLeapYear(1) === false);
console.log(isLeapYear(100) === false);
console.log(isLeapYear(400) === true);