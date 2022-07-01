// The For/Of Loop
const numbers = [1, 2, 3, 4, 5, 6, 7]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
// //eta normal for loop

for (let number of numbers) {
    console.log(number)
}
//eta for/of diye kora
//obj er khetre let number in numbers

const ayon = {
    nickname: 'Ayon',
    age: 23,
    university: 'BUBT'
}

for (let object in ayon) {
    console.log(object);

}