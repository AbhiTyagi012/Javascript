/*

 Datatypes are only categorised on the basis of two things - 
 1. How they are stored in memory.
 2. How they are accessed from memory

*/

// Primitive -> a copy of original is created at the time of usage

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const anotherScore = 100.4

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);


// Reference (Non Primitive) -> the original is referenced at the time of usage

// Array, Objects, Functions -> datatype = object


const heroes = ["Hulk", "Thor", "Spiderman"];
let myObj = {
    name: "Abhi",
    age: 25,
}

const myFunction = function(){
    console.log("hello world")
}
// console.log(typeof myObj);




// ************************ Memory ************************* //

// Stack (Primitive) , Heap (Non-Primitive)

let myName = "abhityagi"

let anotherName = myName
anotherName = "another name"

// console.log(myName)
// console.log(anotherName)


let userOne = {
    name: "User 1",
    email: "user1@gmail.com"
}

let userTwo = userOne
userTwo.email = "user2@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)



