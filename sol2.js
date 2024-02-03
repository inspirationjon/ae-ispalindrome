function isPalindrome(string, i=0) {
    let j = string.length - 1 - i;
  
    if(i>=j){
      return true
    }
    
    if(string[i] !== string[j]){
        return false
    }
    
    return isPalindrome(string, i + 1)
  
  
  }
  
  // Do not edit the line below.
  exports.isPalindrome = isPalindrome;
  