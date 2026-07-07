// Compare the difference between an object and a JSON string.

let products = 
{
  name : 'basketball',
  price : 100,
  ['delivery-time'] : '5 days'
};
let json = JSON.stringify(products)
console.log(typeof json)
console.log(typeof products)