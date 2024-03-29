/*
# -----------------------INSTRUCTIONS------------------------
Multiply Lists
Write a function that takes two array arguments, each containing 
a list of numbers, and returns a new array that contains the 
product of each pair of numbers from the arguments that have 
the same index. 

# --------------------------PROBLEM--------------------------

# Input: two arrays
# Output: new array
# ---------------------------RULES---------------------------
# Explicit: You may assume that the arguments contain the same number of elements.

# Implicit: 

# --------------------------EXAMPLES-------------------------
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
# ----------------------------ALGO---------------------------
iterate over the first array and using map return the product of
multiplying the elements with the same index together.
*/
function multiplyList(arr1, arr2) {
  return arr1.map((el,idx) => el = (arr1[idx] * arr2[idx]))
}
console.log(multiplyList([3, 5, 7], [9, 10, 11]))