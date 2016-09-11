// parameter is base-10 integer n
function getIntegerComplement(n) {

  // dealing with constraints
  // 0 <= n <= 10^5
  if (0 <= n <= Math.pow(10, 5)) {
  } else {
    throw new Error("n not within constraint");
  }
  // defining variable called binary that converts the given number to a string with a base of 2 since we are dealing with binary
    // toString() method converts a number to a string and can take an optional parameter of a radix which is an integer between 2 and 36 specifying the base to use for numeric value
  var binary = n.toString(2);
  console.log(binary);
  // defining variable called complement that is an empty string
  var complement = "";
  // for loop that goes through every character in binary string variable
  for (var i in binary) {
    // adds on numbers to complement string
    // using ternary operator to determine which integer to add for complement conversion
    // if character is equal to 1, add a 0
    // else, add a 1
    complement += ((binary[i] === "1") ? 0 : 1);
  }
  // return complement of n as base-10 integer
  return parseInt(complement, 2);
}

// n = 5 is 101 in binary
// for every character in 101
// complement = 010
// complement of n is 010 which is 2 in decimal
console.log(getIntegerComplement(5));
// return 2

console.log(getIntegerComplement(50));
// return 13
console.log(getIntegerComplement(100));
// should be 27