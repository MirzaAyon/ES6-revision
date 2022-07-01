//without Filter

// const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45, 82, 63, 98];
// let filteredArr = []

// for (number of newArr) {
//     if (number % 2 == 0) {
//         //bijor er jonno 2!=0
//         filteredArr.push(number)
//     }
// }
// console.log(filteredArr);



//with filter
//same kaj ebar filter diye korbo
const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45, 82, 63, 98];
const filteredArr = newArr.filter(number => number % 2 === 0);
console.log(newArr);
//bijor er jonno != 0 hobe 
// console.log(filteredArr); //jor gula sudhu dekhabe