const str = "JavaScript is awesome";

function reverseAString(str) {
  result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(`Reversed string is: ${reverseAString(str)}`);
