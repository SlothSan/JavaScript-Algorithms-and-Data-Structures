function palindrome(str) {
    let regex = /[\W_]/g;
    let lowerCaseRegexString = str.toLowerCase().replace(regex, "");
    let reversedString = lowerCaseRegexString.split("").reverse().join("");
    return reversedString === lowerCaseRegexString;
  
  }
  
  palindrome("eye");