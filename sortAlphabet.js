//Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

function AlphabetSoup(str) { 

    // code goes here 
    let a = str.split("");
    console.log(a);
    str= a.sort();
  
    str = a.join("");
    console.log(str);
    return str; 
           
  }
     