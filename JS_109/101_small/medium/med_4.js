/*
# Write a function that implements a miniature stack-and-register-based programming 
language that has the following commands (also called operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
All operations are integer operations (which is only important with DIV and REMAINDER).

Programs will be supplied to your language function via a string argument. 
# --------------------------PROBLEM--------------------------

# Input: string
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: assume that all arguments are valid
Initialize the stack and register to the values [] and 0, respectively.

# Implicit: 

# --------------------------EXAMPLES-------------------------
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
# ----------------------------ALGO---------------------------
# initalise the 'stack' to []
initalise the register to 0
split the atring argument into an array of strings delimited by spaces
iterate over this array and check whether the value is a number string or
an alphabetical string
if numerical change the string to a number and add it to the register
if alphabetical string compare the word against the deifned word strings and
complete the correspinding action. ie if the string is 'push' add the register value
to the stack array
if the string is MULT pop a value from the array and multiply the register by this 
value and store in the result in the register.
*/
// function minilang(string) {
//     let register = 0;
//     let stack = [];
//     let programArr = string.split(' ');
 
//     for (let idx = 0; idx < programArr.length; idx++) {
//         let command = programArr[idx];
//             if (!isNaN(Number(command))) {
//               register = Number(command);  
//             } else if (command === 'PUSH') {
//                 stack.push(register);
//             } else if (command === 'MULT') {
//                 register = (register * stack.pop());
//             } else if (command === 'PRINT') {
//                 console.log(register)
//             } else if (command === 'ADD') {
//                 register = (register + stack.pop());
//             } else if (command === 'POP') {
//                 register = stack.pop();
//             }  else if (command === 'DIV') {
//                 register = Math.floor(register / stack.pop());
//             } else if (command === 'REMAINDER') {
//                 register = Math.floor(register % stack.pop());
//             } else if (command === 'SUB') {
//                 register = (register - stack.pop());
//             }
//     }
//     return (register)
// }

// refactor with a switch/ case statement
function minilang(string) {
  let register = 0;
  let stack = [];
  let programArr = string.split(' ');

 for (let idx = 0; idx < programArr.length; idx++) {
    let command = programArr[idx];

    switch (command) {

    case 'PUSH':
      stack.push(register);
      break;
    case 'MULT':
      register = (register * stack.pop());
      break;
    case 'PRINT':
      console.log(register);
      break;
    case 'ADD':
      register = (register + stack.pop());
      break;
    case 'POP':
      register = stack.pop();
      break;
    case 'DIV':
      register = Math.floor(register / stack.pop());
      break;
    case 'REMAINDER':
      register = Math.floor(register % stack.pop());
      break;
    case 'SUB':
      register = (register - stack.pop());
      break;
    default:
      register = Number(command);
    }
 }
return register;
}

// Further Exploration
// Refactor the minilang function to include some error handling. 
// In particular, the function should detect and report empty stack conditions 
// (trying to use a value from the stack when there are no values), 
// and invalid tokens in the program. Ideally, the function should return 
// an error message if an error occurs, or undefined if the program runs successfully.
// couls use a RegExp test to check for non - alphanumeric characters ie

// (/[^a-z0-9]/gi).test(command) ? console.log("error") : register = Number(command);
// THis will display an error message but not break out of the for loop

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)