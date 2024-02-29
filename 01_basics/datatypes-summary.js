// Primitive datatype
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggIn = false;
const ouSideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34567984644454848484879797n;

console.log(typeof bigNumber);

/************************* */

// Reference Type (Non primitive)
// Array, Objects, Functions


const heros = ["shaktimann", "naagraj", "doga"];


let myObj = {
  name: "dherj",
  age: 25
}


const myFunction = function() {
    console.log('hello world');
}

console.log(typeof bigNumber);

console.log(typeof myFunction);