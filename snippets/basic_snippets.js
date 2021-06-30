function reverseString(str) {
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  const re = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(re, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
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

function findLongestWord(sentence) {
  let length = 0;
  
  if (!sentence || sentence === '') {
    return -1;
  }
  
  const arr = sentence.split(' ');
  for (word of arr) {
    if (word.length > length) {
      length = word.length
    }
  }
  
  return length;
}

function maxCharacter(str) {
  const charMap = {};
}

/////////////////////
const newStr = capitalizeLetters('test new function');
console.log(newStr);
