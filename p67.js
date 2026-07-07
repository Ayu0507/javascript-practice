// Preety-print a JSON string with indentation.


let products = [
{
  name : 'basketball',
  price : 100,
  ['delivery-time'] : '5 days'
},
  {
  name : 'football',
  price : 300,
  ['delivery-time'] : '3 days'
  },
  
   {
  name : 'Tshirt',
  price : 200,
  ['delivery-time'] : '4 days',
  }
];

console.log(JSON.stringify(products))
console.log(JSON.parse(JSON.stringify(products,null,'\n')))