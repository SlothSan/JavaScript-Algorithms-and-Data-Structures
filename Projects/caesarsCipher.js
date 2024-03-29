function rot13(str) {
    let rotCharArray = [];
    let regEx = /[A-Z]/;
    str = str.split("");
    for (let x in str) {
      if (regEx.test(str[x])) {
        // A more general approach
        // possible because of modular arithmetic
        // and cyclic nature of rot13 transform
        rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
      } else {
        rotCharArray.push(str[x].charCodeAt());
      }
    }
    str = String.fromCharCode.apply(String, rotCharArray);
    return str;
  }