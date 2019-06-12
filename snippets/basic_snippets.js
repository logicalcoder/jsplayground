function reverseString(str) {
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  const reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}

function reverseInt(int) {
  if (isNaN(int)) {
    return -1;
  } else {
    return parseInt(int.toString().split('').reverse().join('')) * Math.sign(int);
  }
}

function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

// Continue: https://youtu.be/M2bJBuaOeOQ?t=1800

function maxCharacter(str) {
  const charMap = {};
}

/////////////////////
const newStr = capitalizeLetters('test new function');
console.log(newStr);