//spread operators with objects

const phones = {
    brand: 'Walton',
    color: 'Red'
}
const phoneExtra = {
    camera: '500mp',
    battery: '2000mah'
}
const fullPhoneDetails = { ...phones, ...phoneExtra };
console.log(fullPhoneDetails)
const fullPhoneDetails2 = { ...phones, ...phoneExtra };
console.log(fullPhoneDetails2)