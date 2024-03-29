/*
# -----------------------INSTRUCTIONS------------------------
Multiplicative Average
Write a function that takes an array of integers as input, 
multiplies all of the integers together, divides the result 
by the number of entries in the array, and returns the 
result as a string with the value rounded to three decimal places.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: string rounded to 3 dp
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
# ----------------------------ALGO---------------------------
get the average by using reduce and arr.length
return the average to 3 dp using toFixed(3)
*/
function multiplicativeAverage(arr) {
  let ave = arr.reduce((acc, el) => acc * el ,1)/ arr.length
  return ave.toFixed(3)
}
console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"