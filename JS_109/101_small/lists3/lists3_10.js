/*
# -----------------------INSTRUCTIONS------------------------
Inventory Item Availability
Building on the previous exercise, write a function that returns
true or false based on whether or not an inventory item is available. 
As before, the function takes two arguments: an inventory item and a list of transactions. 
The function should return true only if the sum of the quantity values 
of the item's transactions is greater than zero. 
Notice that there is a movement property in each transaction object. 
A movement value of 'out' will decrease the item's quantity.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true
# ----------------------------ALGO---------------------------
# use filter method from previous function 
initalize a variable to track the inventory
iterate over the transactions array
if the movement property is 'in' then  add to the inventory count
else substract from the count
if the count is postitive return true else return false
*/
function isItemAvailable(num ,arr) {
  let transactions = arr.filter(el => el.id === num)
  let inventory = 0;
  transactions.forEach(item => {
    if (item.movement === 'in') {
      inventory += item.quantity;
    } else {
      inventory -= item.quantity
    }
  })
  return inventory < 0 ? false : true
}
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true