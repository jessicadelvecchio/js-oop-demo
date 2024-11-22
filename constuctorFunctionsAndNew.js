// * writing reusable pattern for an obj

// const rightTriangle = {
// 	a             : 9,
// 	b             : 12,
// 	getArea() {
// 		return this.a * this.b / 2;
// 	},
// 	getHypotenuse() {
// 		return Math.sqrt(this.a ** 2 + this.b ** 2);
// 	}
// };

// * constructor functions

// * function name is CAPS, this is a function, not an object
function Triangle(a, b) {
  this.a = a;
  this.b = b;
  this.getArea = function () {
    return (this.a * this.b) / 2;
  };
  this.getHypotenuse = function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  };
}

// * cannot execute this. This is an function to create a new object
Triangle(5, 7); //UNDEFINED!

// * USING THE `NEW` OPERATOR. Will create new obj with the function Triangle pattern. Must save to their own variable.

const tri1 = new Triangle(3, 4);
tri1.getHypotenuse(); //5
const tri2 = new Triangle(9, 12);
tri2.getHypotenuse(); //15

// * what does NEW do?
// creates a blank, plain JS object
// passes the newly created object from step 1 as the `this` context. which means the Triangle obj pattern.

// * prototypes, an obj w all the methods attached to arr/sets/etc
// when adding methods in the constructor fn, these are updating the prototype, if using classes
// this means that every obj you make will have access to these methods

// when we create new pattern objs we are repeating the same data inside over and over w different values.
// using classes we can save these methods so that our created objs have access to them across the board rather than having duplicate code

Triangle.prototype.getArea = function () {
  return (this.a * this.b) / 2;
};

Triangle.prototype.getHypotenuse = function () {
  return Math.sqrt(this.a ** 2 + this.b ** 2);
};
