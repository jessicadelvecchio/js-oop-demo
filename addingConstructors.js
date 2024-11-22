// * classes with constructors
// can pass values when creating ea new instance
// constructors define the key/val pairs within the class the pass through as args

// anything within the constructor will be part of each obj instance. instead of defining outside of every obj

// never return a value within a constructor, it will stop the rest of the constructor code. But it won't stop the obj from being created. Basically breaking the pattern.

// throwing an error will stop new obj creation because data cannot be validated

class Triangle {
  constructor(a, b, c) {
    // args to expect
    for (let side of [a, b, c]) {
      // loop through each arg
      if (!Number.isFinite(side) || side <= 0) {
        // validate data
        throw new Error("Sides must be positive numbers!");
      }
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  greet() {
    console.log("HELLO FROM A TRIANGLE!!!");
  }
  display() {
    console.log(`Triangle with sides of ${this.a},  ${this.b}, and ${this.c}`);
  }
}

const t1 = new Triangle(3, 4, 5);
t1.display();

const t2 = new Triangle(5, 7, 9);
t2.display();

new Triangle(true, false, -1); //ERROR!!!
