// 7. Spread Operator

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2];
const arr4 = [arr1, arr2];
const newArray = [...arr2]
//evabe arr2 er bodole obj o use korte parbo

console.log(arr3);
console.log(arr4);
console.log(arr2);
console.log(newArray);
console.log(...arr1); //evabe likhle arr show korbe na just arr er value gula show krbe