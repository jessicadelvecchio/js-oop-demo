// * inheritence, extends , super
// if we want to add additonal validations, etc instead of copying the pattern completely, we can use extend or super

class Triangle {
  constructor(a, b, c) {
    console.log("INSIDE TRIANGLE CONSTRUCTOR");
    for (let side of [a, b, c]) {
      if (!Number.isFinite(side) || side <= 0) {
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
    return `Triangle with sides of ${this.a},  ${this.b}, and ${this.c}`;
  }
  getArea() {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  isBig() {
    return this.getArea() > 50;
  }
}

//* EXTENDS
// writing another class that extends from the Triangle pattern
// everything else is the same except now we are adding additional validation.
// remove dupe code
// all methods else will still be accessible

// * we can also add additional methods and override methods on extended classes
//

class RightTriangle extends Triangle {
  // extends pattern from original
  constructor(a, b, c) {
    if (a * a + b * b !== c * c) {
      throw new Error("Invalid C side for right triangle!");
    }
    console.log("INSIDE RIGHT TRIANGLE CONSTRUCTOR");

    // calls the constructor of the super class, the class we are extending from
    // need to pass into super the params from the parent constructor
    super(a, b, c);

    // common to add additional properties
    // must call super before referencing this
    this.hypot = c;
  }
  isRightTriangle() {
    return true;
  }

  // * if a method is in the extended class, this one will be called, otherwise will use parent method
  display() {
    // super.display() will call the parent method and will modify slightly as below
    return "Right " + super.display();
  }
}

class EquilateralTriangle extends Triangle {
  constructor(a) {
    super(a, a, a);
  }
  display() {
    return "Equilateral " + super.display();
  }
}

class ColorEquilateralTriangle extends EquilateralTriangle {
  constructor(a, color) {
    super(a);
    this.color = color;
  }
  display() {
    return this.color + " " + super.display();
  }
}
