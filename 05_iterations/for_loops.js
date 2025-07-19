// for

// const arr = [1,2,3,4,5]
// let sum = 0
// for(let i=0;i<arr.length;i++){
//     sum += arr[i]
// }
// console.log(sum)

// for(let i=0;i<10;i++){
//     const element = i
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element)
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value :${i}`)
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and outer loop ${i}`)
//     }
    
// }


// break and continue
// for (let index = 0; index <= 20; index++) {
//     if (index == 5){
//         console.log(`Detected 5`)
//         break
//     }
//     console.log(`Valye of i is ${index}`)
    
// }

for (let index = 0; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`)
        continue
    }
    console.log(`Valye of i is ${index}`)
    
}
