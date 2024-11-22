// * using this and methods
// * can have properties and fn within obj interact w each other

function getHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}
function getArea(a, b) {
  return (a * b) / 2;
}

// let side1 = 4;
// let side2 = 3;
// const side3 = getHypotenuse(side1, side2);

// const area = getArea(side1, side2);
// side1 = 9;
// side2 = 12;
// getHypotenuse(9, 12);

// * instead of doing everything separately, when these fns interact w each other. Storing them in an obj groups related data together

// * this related to the parent obj. this.key grabs that specific data from the obj to use elsewhere in the obj instead of rewriting code over and over

// * if you print this within the obj it will console log the entire object

// * arrow fns do not work with this

const rightTriangle = {
  a: 9,
  b: 12,
  getArea() {
    // can write out with function ()
    return (this.a * this.b) / 2;
  },
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};

// * can update the data
rightTriangle.getHypotenuse(); //15
rightTriangle.a = 3;
rightTriangle.b = 4;
rightTriangle.getHypotenuse(); //5
