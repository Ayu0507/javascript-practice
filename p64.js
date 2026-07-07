// Convert a JSON string into JavaScript object.


let product = {
  name : 'basketball',
  price : 100,
  ['delivery-time'] : '5 days'
};

console.log(JSON.stringify(product));
console.log(JSON.parse(JSON.stringify(product)))