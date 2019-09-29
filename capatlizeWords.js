//Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.
//Words will be separated by only one space.

function LetterCapitalize(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    let cp = words[i].split("");
    cp[0] = cp[0].toUpperCase();
    words[i] = cp.join("");
  }

  console.log(words.join(" "));
  return words.join(" ");
}

// keep this function call here
LetterCapitalize("hello world");
