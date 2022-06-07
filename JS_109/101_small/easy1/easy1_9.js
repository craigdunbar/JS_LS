/*
# -----------------------INSTRUCTIONS------------------------
Leap Years 2

Update the function from the previous exercise to determine
leap years before and after 1752.

# --------------------------PROBLEM--------------------------

# Input: integer representing a year
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: in input year prior to 1752 
            - leap year every 4 years.
            else leap year same as last exercise.

# Implicit: 

# --------------------------EXAMPLES-------------------------

# ----------------------------ALGO---------------------------
# 
*/
function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400  === 0)) {
    return true
  } else {
    return false
  }
}
console.log(isLeapYear(2016)  === true);
console.log(isLeapYear(2015)  === false);
console.log(isLeapYear(2100)  === false);
console.log(isLeapYear(2400)  === true);
console.log(isLeapYear(240000) === true);
console.log(isLeapYear(240001) === false);
console.log(isLeapYear(2000)  === true);
console.log(isLeapYear(1900)  === false);
console.log(isLeapYear(1752)  === true);
console.log(isLeapYear(1700)  === true);
console.log(isLeapYear(1)     === false);
console.log(isLeapYear(100)  === true);
console.log(isLeapYear(400)   === true);