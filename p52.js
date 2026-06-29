// Create a car object and delete one of its properties.

let car = {
  price : 50000,
  brand : 'BMW',
  warrenty : '5 Years'
};
delete car.price;
console.log(car);