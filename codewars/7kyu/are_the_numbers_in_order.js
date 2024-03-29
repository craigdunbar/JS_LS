/*
# -----------------------INSTRUCTIONS------------------------

Are the numbers in order?

In this Kata, your function receives an array of integers as input. 
Your task is to determine whether the numbers are in ascending order. 
An array is said to be in ascending order if there are no two adjacent 
integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, 
i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be 
sorted in ascending order since all (zero) adjacent pairs of integers satisfy 
the condition that the left integer does not exceed the right integer in value.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order


# ----------------------------ALGO---------------------------
# copy the array argument and sort it
iterate over the given array and compare
values at the same index oin both arrays
if every one of them is the same return true
else return false
*/
function inAscOrder(arr) {
  let sorted = arr.slice(0);
  sorted.sort((a, b) => a - b);
  return arr.every((el, idx) => el === sorted[idx])
}

console.log(inAscOrder([1, 2, 4, 7, 19])) //, true, 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
console.log(inAscOrder([1, 2, 3, 4, 5])) //, true, 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20])) //, false, 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])) //, false,