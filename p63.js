// Convert a JavaScript object to a JSON string.

let product = {
  name : 'basketball',
  price : 100,
  ['delivery-time'] : '5 days'
};
console.log(product);
console.log(JSON.stringify(product));