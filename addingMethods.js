// * methods are functions as properties in an obj

class Triangle {
  constructor(a, b, c) {
    // typically constructors go at the top bc it runs first
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
    console.log(`Triangle with sides of ${this.a},  ${this.b}, and ${this.c}`);
  }
  getArea() {
    const { a, b, c } = this; // deconstructing so no repeating this over and over
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c)); // methods can return values
  }
  isBig() {
    // methods can call other methods. must use this
    return this.getArea() > 50;
  }
}

const t1 = new Triangle(3, 4, 5);
const t2 = new Triangle(5, 9, 10);
const t3 = new Triangle(30, 40, 50);

// * call method like all others w . notation
t1.display();
