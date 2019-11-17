function KaprekarsConstant(num) {
  // code goes here

  let arr = (num + "").split("");
  //   debugger;
  if (arr.length < 4) {
    let z = 4 - arr.length;
    for (let i = 0; i < z; i++) {
      arr.push("0");
    }
  }
  arr.sort(function(a, b) {
    return a - b;
  });
  let numas = [...arr].join("");
  arr.sort(function(a, b) {
    return b - a;
  });
  let numdes = [...arr].join("");
  let n = numdes - numas;
  c++;

  if (n == 6174) return c;
  else return KaprekarsConstant(n);
}

let c = 0;
// keep this function call here
console.log(KaprekarsConstant(9831));
