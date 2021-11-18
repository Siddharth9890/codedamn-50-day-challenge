const number = "99 876543210";

function validateMobile(number) {
  // write your solution here
  const result = new RegExp(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/);
  return result.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`);
