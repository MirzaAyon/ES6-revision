// practice default values
function sum1(a, b = 10) {
    let result = a + b
    return result
}
const result = sum1(10)
const result2 = sum1(10, 30)
console.log(result)
console.log(result2)
//pm er value nai tai default ta kaj korse pm er value thakle otai kaj krto


//another example
function sum(isAdd = true) {
    if (isAdd == true) {
        console.log('True');
    } else {
        console.log('False');
    }
}

sum() //default ta kaj korse
sum(false) //default ta kaj koreni