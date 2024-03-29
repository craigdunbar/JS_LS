// Using the code from the previous exercise, add a constructor method 
// that logs to the console I'm a cat! when a new Cat object is initialized.
class Cat {
  constructor() {
    console.log("I'm a cat!")
  }
}

let kitty = new Cat()

// When defining a class, you usually need to define the `constructor` method.

// Adding this method lets us execute certain statements when a new `Cat` object is initialized. 
// In this case, we want to log `I'm a cat!`. 
// We accomplish this by using `console.log()`.