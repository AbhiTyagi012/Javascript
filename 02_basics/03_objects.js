// singleton
// Object.create
/*
 when we declare using literals then not singleton
 singleton when using constructors
*/

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Abhi",
    "full name": "Abhi Tyagi",
    [mySym]: "mykey1",
    age: 25,
    location: "Gurugram",
    email: "abhi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "abhi@outlook.com"
// Object.freeze(JsUser)
JsUser.email = "abhi@github.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())