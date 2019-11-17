var reverse = function(x) {
  let neg = false;

  if (x < 0) {
    neg = true;
    x = x * -1;
  }

  let v = x + "";
  let rev = v
    .split("")
    .reverse()
    .join("");

  if (rev > 2147483647) return 0;
  else if (neg === false) return rev;
  else return -1 * rev;
};
