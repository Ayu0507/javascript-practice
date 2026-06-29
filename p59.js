// Merge two objects into one.

let product = {
  basketball : 300,
  football : 500,
  Tshirt : 200,
  basket : 100
}
let devices = {
  laptop : 'ASUS',
  vehicle : 'Bike',
  washingMachine : 'relme'
}
let copy = Object.assign({},product,devices);
console.log(copy);