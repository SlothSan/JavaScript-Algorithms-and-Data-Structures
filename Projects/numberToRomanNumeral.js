function convertToRoman(num) {
    const romanHash = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400, 
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
   let returnString = '';
   for (let i of Object.keys(romanHash)) {
     let q = Math.floor(num / romanHash[i]);
     num -= q * romanHash[i];
     returnString += i.repeat(q);
   }
   return returnString;
  }
  
  convertToRoman(36);
  console.log(convertToRoman(12445));