// Using the code from the previous exercise, move the greeting from the 
// constructor method to an instance method named greet that logs a 
// greeting to the console when invoked.

// class Cat {
//   constructor(name) {
//     this.name = name;
//     console.log(`Hello! My name is ${this.name}!`);
//   }
// }
// 

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi! My name is ${this.name}`)
  }
}

let kitty = new Cat('Sophie');
kitty.greet();

// Instance methods are only available when there's an instance of the class. 
// For example, `kitty` is an instance of the `Cat` class. 
// This means, if we add the `greet` method, we're able to invoke it, like this:
// As mentioned in the previous exercise, the property name
//  can be accessed anywhere within the class using this
//  keyword. This lets us print Hello! My name is Sophie!
//  from greet simply by moving the statement from constructor
//  to greet.