// Modify an object after converting JSON to JavaScript.


let products = 
{
  name : 'basketball',
  price : 100,
  ['delivery-time'] : '5 days'
};

console.log(JSON.stringify(products))
console.log(JSON.parse(JSON.stringify(products)))
products.name = 'football'
products.price = 500
products["delivery-time"] = '6 days'
console.log(products)