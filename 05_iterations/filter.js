const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num)=> {
//     return num > 4
// })
// const newNums = []
// myNums.forEach((num)=>{
//     if (num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums)


const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publish_year: 1960,
    edition_year: 2015
  },
  {
    title: "1984",
    genre: "Dystopian",
    publish_year: 1949,
    edition_year: 2021
  },
  {
    title: "The Great Gatsby",
    genre: "Classic",
    publish_year: 1925,
    edition_year: 2020
  },
  {
    title: "The Catcher in the Rye",
    genre: "Coming-of-Age",
    publish_year: 1951,
    edition_year: 2019
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "Non-fiction",
    publish_year: 2011,
    edition_year: 2022
  }
];

let userBooks = books.filter((book) => {
    return book.genre ==="Fiction"
})

userBooks = books.filter((bk) =>{
    return bk.publish_year >= 1950 && bk.genre === "Fiction"
})


console.log(userBooks)
