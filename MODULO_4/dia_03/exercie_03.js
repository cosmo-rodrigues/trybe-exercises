let n = 7;
let inputLine = '';
let inputPosition = n;
for (let count = 0; count < n; count++) {
  for (let count = 0; count <= n; count++) {
    if (count < inputPosition) {
      inputLine +=' ';
    } else {
      inputLine +="*";
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition--;
}