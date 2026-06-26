// Create a function to convert Fahrenheit to Celsius.

function convertCelsius(fahrenheit,units){
  let celsius = (fahrenheit-32)*5/9;
  console.log(celsius,units);
}
convertCelsius(86,'C');