// Write a function that takes an integer as input,
// and returns the number of bits that are equal to one
// in the binary representation of that number.
// You can guarantee that input is non-negative.


var countBits = function(n) {
  // Program Me

let x= n.toString(2);

let count= 0;

  for (let i of x) {
      if(i==1)
  count++;
  }

  return count
};
