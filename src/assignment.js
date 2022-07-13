// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */

function sumOfNumbers() {

  // Declaring the variable for the array of numbers
  const Nums = [27, 10, 75, -30, 20, 190, 300, -224, 60, 174, 3, 34, 33, 44, 57, 56, 18, 22, 1, 0, 2, 4, 66, -54, 23, 67, -87, 1, 0, -3, 2, 6, -50, -4, 7, 32, -12, 13, 14, -41, 15, -52, -44, -66, 80, 10, 20, 90, -54, 67, -31, 21, -21, -23, 23, 34, 43, 55, 67, 89, -12, 32, 43, -35, -32, 31, 96, 97, -70, -76, 98, -90, 0, 7, 9]

  // Suming the numbers in the array
  const result = Nums.reduce(function (x, y) {
    return x + y;
  }, 0);

    console.log(result)
    return Nums.length
}
sumOfNumbers()
assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers() {

  // Declaring the variable for the array of numbers
  const arr = [17, 15, 20, 2, 3, 45, 50, 77, 7]

  // variable  for the even number
  var evenNumbers = [];

  // logging the even numbers with for.each functions
  arr.forEach(number => {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  });

  // login the array of even numbers
  console.log(evenNumbers)
  // console.log(evenNumbers.length)
  return arr.length;
}

countEvenNumbers()
assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

