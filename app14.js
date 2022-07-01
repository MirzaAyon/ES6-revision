//optional chaining dekhbo

const numbers = {
    first: 30,
    second: 20
}
console.log(numbers.first);
console.log(numbers.second);

const newNumbers = {
    third: {
        first: 30,
        seocnd: 20,
    }
}
console.log(numbers.third);
console.log(numbers.second);
console.log(newNumbers.third.first);

const numbers2 = {
    first: 30,
    second: 20
}

console.log(numbers2?.third?.first); //etai optional chaining 
//optional chaining na korle bishal error dito
