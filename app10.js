//filter


const newArr2 = ['Faysal', 'Arfan', 'Meraj', 'Tanim']

const foundName = newArr2.filter(name => name.length % 2 != 0)
console.log(foundName);
console.log(foundName[1]); //2nd ta show krbe 
console.log(...foundName);