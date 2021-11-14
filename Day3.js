const num = 3849;

function reverseGivenInteger(num) {
  const reversed = num.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(num);
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);
