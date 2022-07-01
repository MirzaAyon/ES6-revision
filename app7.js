// without Map

// const myArr = [2, 4, 6, 8, 10];
// let myNewArr = []
// for (let number of myArr) {
//     let tripled = number * 3;
//     myNewArr.push(tripled)
// }
// console.log(myNewArr);
//3 gun korte ei code amdr use kora lagto ja map er shahajje aro easy

//same work using Map
const myArr = [2, 4, 6, 8, 10];
const tripledArr = myArr.map(number => number * 3);
console.log(tripledArr);
//number * 3 er bodole number+1 ba jekono kichu dewa jabe

// const ayon = [1, 2, 3, 4, 5, 6];
// let ayon2 = [];

// for (let number of ayon) {
//     let tripled = number * 3;
//     ayon2.push(tripled);
// }
// console.log(ayon2);

ayon = [1, 2, 3, 4, 5, 6];

const ayon2 = ayon.map(number => number * 3);
console.log(ayon2);
