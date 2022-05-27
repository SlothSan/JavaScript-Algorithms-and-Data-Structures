let price = 20,
    name = 'Hiking Boots',
    discounted = false,
    taxRate = 0.07;



let message = (price < 10) ? 'Yes' : "No";

showMessage(message);

let myFunction = function (message, firstName) {
    console.log(message);
    console.log(firstName);
}

myFunction("Hello", "Mike");


changePercentOff(30);


let key = 42;
function getSecretCode(value) {
    
    let keyGenerator = function() {
        let key = 12;
        console.log('in keyGenerator', key);
        return key;
    }
    
    let code = value * keyGenerator();
    cosnole.log("in secretCode", key);
    return code;
}

let secretCode = getSecretCode(2);


