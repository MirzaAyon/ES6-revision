//let
var myName = "Ayon";
var myName = "plabon";
console.log(myName);
//eta possible

let hisName = "Mirza";
// let hisName = "Minhaz";
//eta impossible
hisName = 'minhaz';
console.log(hisName);
//eta impossible

Age = 20;
console.log(Age);
//etao possible 
let Age2;
console.log(Age2); //undefined ashbe
//etao possible na


let id = 10;
id = 11;
console.log(id);
//possible
//declare na kora geleo , re assign, re define kora jae
//but const diye ei kaj kora jabe na


// 4.templete litaral
// eta aro name templete string, string templete, backticks syntex ei total 4 ta name etar


//5.Arrow function

// function sum(a, b) {
//     let result = a + b
//     return result
// }
// const result = sum(10, 15)
// console.log(result)
//this is a function without arrow

// const sum = (a, b) => a + b;
// const result1 = sum(12, 15)
// console.log(result1)
//this is a function with arrow
//with 2 parameters


//ichcha korle ekta parameter o dewa jae
// const sum = a => a
// const result = sum(10)
// console.log(result)
//etao ekta function
//with 1 parameter

const sum = (a, b, c) => {
    let sum1 = a + b
    let sum2 = a + c

    return sum2;
    // return sum2, sum1; 
    //2 ta dile first jeta declare kora hoise shetai count hbe jemon sum1
}
const result = sum(10, 21, 34)
console.log(result)
//Arrow function with three parameters
//ekadhik line hole block akare {} ene likhbo
//boro func hole evabe likhbo and return anbo
// r chooto func hole return ana lagbe na and ek line ei hbe





