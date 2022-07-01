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

function sum(a, b) {
    let result = a + b
    return result
}
const result = sum(10, 15)
console.log(result)
//this is a function without arrow

const sum = (a, b) => a + b;
const result1 = sum(12, 15)
console.log(result1)

