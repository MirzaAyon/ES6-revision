//6. Array Destructuring

//code for access an element in an array
// let myCars = ['Toyota', 'BMW', 'Tata', 'Ford', 'Tesla'];
// const firstCar = myCars[0];
// const secondCar = myCars[1];
// console.log(firstCar);
// console.log(secondCar);
//new system
let myCars = ['Toyota', 'BMW', 'Tata', 'Ford', 'Tesla'];
const [first, second, third, forth, fifth] = myCars; //ei je first,secoond egula ek ek ta variable 
//r ei line er madhome var gulake likha ke bole array destructuring
console.log(fifth);
console.log(second);
console.log(third);