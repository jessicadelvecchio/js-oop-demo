// const add = (x, y) => x + y;
// const mult = (x, y) => x * y;
// const square = (x) => x * x;
// const power = (x, y) => x ** y;

// const myMath = {};
// myMath.add = add;
// myMath.mult = mult;

// * adding the functions as obj properties. fns that are already declared
// const myMath = { add, mult, square, power };

// * can add functions inline, within the obj itself.
// * arrow functions do not work here. they conflict with the this
// const myMath = {
// 	add  : function(x, y) {
// 		return x + y;
// 	},
// 	mult : (x, y) => {
// 		return x * y;
// 	}
// };

// * this is shorthand
const myMath = {
  add(x, y) {
    return x + y;
  },
  square(x) {
    return x * x;
  },
};

// adding methods/functions as keys
// these are all standalone functions

// we are using the obj to reference the methods

// similar to Math object
// you call Math.method

// we want to group all of the methods/functions inside of an object. then we can use them all. more organized.
