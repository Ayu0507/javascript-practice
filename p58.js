// Count the number of properties in an object.

let products = {
  basketball : 300,
  football : 500,
  Tshirt : 200,
  basket : 100
}
let count = Object.keys(products).length;
console.log(count)