/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var s1=sortString(str1.toLowerCase());
  var s2=sortString(str2.toLowerCase());
   console.log(s1);
   console.log(s2);
  
  if(s1===s2){
   console.log("Anagram");
   return true;
  }
  else{
    console.log("No Anagaram")
    return false;

  }

}
function sortString(str){
  var arr=str.split("");
  arr.sort();
  var sortedStr=arr.join("");
  return sortedStr;
}
isAnagram("Debit Card","Bad Credit");

module.exports = isAnagram;
