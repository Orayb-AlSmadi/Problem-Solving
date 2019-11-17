// Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several characters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

function SimpleSymbols(str) {
  // code goes here
  let flag = false;
  let Regex = /[a-z]/;
  //   debugger;
  //   console.log(Regex.test(str[0]));
  if (Regex.test(str[0]) == true) {
    return false;
  }

  if (Regex.test(str[str.length - 1]) == true) {
    return false;
  }

  for (let i = 1; i < str.length - 1; i++) {
    if (Regex.test(str[i]) == true) {
      if (str[i - 1] == "+" && str[i + 1] == "+") {
        flag = true;
        i++;
      } else return false;
    }
  }
  return flag;
}

// keep this function call here
console.log(SimpleSymbols("+d+=3=+s+"));
console.log(SimpleSymbols("f++d+"));
