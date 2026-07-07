// Convert the nested object to JSON.

let products ={ 

  name : 'basketball',
  price : 100,
  ['delivery-time'] : '5 days',

  product2 : {
  name : 'football',
  price : 300,
  ['delivery-time'] : '3 days',
  },
  
   product3 : {
  name : 'Tshirt',
  price : 200,
  ['delivery-time'] : '4 days'
   } 
  };

  let json = JSON.stringify(products)
  console.log(json)