/*

 Datatypes are only categorised on the basis of two things - 
 1. How they are stored in memory.
 2. How they are accessed from memory

*/

// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const anotherScore = 100.4

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);


// Reference (Non Primitive)

// Array, Objects, Functions -> datatype = object


const heroes = ["Hulk", "Thor", "Spiderman"];
let myObj = {
    name: "Abhi",
    age: 25,
}

const myFunction = function(){
    console.log("hello world")
}
console.log(typeof myObj);
