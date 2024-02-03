function isPalindrome(string) {
  return string === string.split('').reverse().join('')
  
    //  if (string.length < 1) {
    //   return false;
    // }
  
    // // Convert the string to lowercase
    // string = string.toLowerCase();
  
    // let middle = Math.round(string.length / 2);
    // let left = string.slice(0, middle);
    // let right = string.slice(middle).split('').reverse().join('');
  
    // return left === right;
  }
  
  // Do not edit the line below.
  exports.isPalindrome = isPalindrome;
  