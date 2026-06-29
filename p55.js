// Find the discounted price of a product.

let product = {
  basketball : 300,
  football : 500,
  Tshirt : 200,
  basket : 100
}

let totalPrice = product.basketball + product.football + product.Tshirt + product.basket;
let Bill = totalPrice * 15 / 100;
console.log(Bill);

