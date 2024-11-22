// * classes are a "blueprint" of functionality

// this is a pattern, this is not a function
// use a caps name

// these methods are then saved in prototype and accessible from any Triangle obj
class Triangle {
  greet() {
    console.log("HELLO FROM TRIANGLE!!!");
  }
  display() {
    // can use this to refer to data within the created obj
    console.log(`Triangle with sides of ${this.a} and ${this.b}`);
  }
}

//* will init new obj with new keyword
const firstTri = new Triangle();
// define this data for each instance. These are new key/value pairs
// calling the methods will use w obj data
firstTri.a = 3;
firstTri.b = 4;

// each instance is different.
const secondTri = new Triangle();
secondTri.a = 9;
secondTri.b = 12;
