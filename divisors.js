//Create a function named divisors/Divisors that takes an integer n > 1 
//and returns an array with all of the integer's divisors
//(except for 1 and the number itself), from smallest to largest. 
//If the number is prime return the string '(integer) is prime'

function divisors(integer) {
  let x =[]
  
  for (let i=2; i<integer; i++){
    if(integer%i == 0)
      {
        x.push(i)
      }
  }
  
  return x.length == 0 ? integer+' is prime' : x
};
