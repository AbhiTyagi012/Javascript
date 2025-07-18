// if
// const temperature = 41

// if(2 != "2"){
//     console.log("executed");  
// }
// else{
//     console.log("hello");  
// }

// if(temperature === 41){
//     console.log("less than 50")
// }

// console.log("Execute")

// <, >, <=, >= , ==, !=, ===, !==

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`User Power is ${power}`)
// }
// // console.log(`User Power is ${power}`)


const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than")
// } else if (balance < 750) {
//     console.log("less than 750")
// } else if (balance < 900){
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoggle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if (loggedInFromEmail || loggedInFromGoggle) {
    console.log("User logged in")
}
