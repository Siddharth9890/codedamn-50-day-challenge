const str = "XeroX";

function getTheGapX(str) {
  const index1 = str.indexOf("X");
  const index2 = str.lastIndexOf("X");
  if (index2 == -1 && index1 == -1) return -1;
  return index2 - index1;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
