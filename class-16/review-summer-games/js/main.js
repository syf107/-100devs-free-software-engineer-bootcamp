//Create a function that takes in an array of numbers. Multiply each number together and alert the product.
function multiplyArray(array) {
  let result = 1;
  array.forEach((element) => {
    result *= element;
  });
  alert(result);
}

multiplyArray([10, 10, 10]);
