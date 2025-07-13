// const tinderUser = new Object() // singleton object
const tinderUser = {}

tinderUser.id = "id123"
tinderUser.name = "Abhi"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "email@gmail.com",
    fullname: {
        userfullname: {
            firstname: "abhi",
            lastname: "tyagi"
        }
    }
}

// console.log(regularUser.fullname?userfullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)



const users = [
    {
        id: 1,
        email: "test@gmail.com"
    },
    {
        id: 1,
        email: "test@gmail.com"
    },
    {
        id: 1,
        email: "test@gmail.com"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



const course = {
    coursename: "javascript basics",
    price: "999",
    courseInstructor: "abhi"
}

// to get values in a simple manner - destructing object
const {courseInstructor: instructor} = course

// console.log(courseInstructor)
// console.log(instructor)


// JSON format

// {
//     "name": "abhi",
//     "course": "javascript",
//     "price": "free"
// }