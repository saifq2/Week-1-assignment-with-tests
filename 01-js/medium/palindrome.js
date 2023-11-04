/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var start=0;
  var end=str.length-1;

  while(start<end){
if(str[start].match(/^[., :!?]/)){
  //console.log(start);
  start++;
  continue;
}
if(str[end].match(/^[., :!?]/ )){
  //console.log(end);
  end--;
  continue;
}
    if(str[start].toLowerCase()===str[end].toLowerCase()){
      start++;
      end--;
    }
    else{
     // console.log(str[start]+str[end]);
      return false;
    }
    
   
  }
  //console.log(end);
  return true;
}
console.log(isPalindrome("Able, was I ere I saw Elba!"))
module.exports = isPalindrome;
