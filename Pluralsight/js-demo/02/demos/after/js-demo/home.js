/*let price = 20,
    name = 'Hiking Boots',
    discounted = false,
    taxRate = 0.07;



let message = (price < 10) ? 'Yes' : "No";

showMessage(message);*/

/*let mySymbol = Symbol();

let person = {
    name: 'John',
    age: 32,
    partTime: false,
    [mySymbol]: 'secretInformation',
    showInfo: function(realAge) {
        showMessage(this.name + " is " + realAge)
    }
};

person.age = 40;
person['name'] = 'Mike';

showMessage( typeof person.showInfo);
*/


/*let person = {
    name: 'John',
    age: 32,
    partTime: false
}

function incrementAge(person){
    person.age++;
}

incrementAge(person);

showMessage(person.age);
*/

/*
let s = "hello";

showMessage(s.charAt(0));
*/

/*const button = document.getElementById('see-review');

button.addEventListener('click', function(){
    const review = document.getElementById('review');
    if(review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = "Close Review";
    }
    else {
        review.classList.add('d-none');
        button.textContent = "See Review";
    }
});*/

const values = ['a', 'b', 'c'];
values.unshift('hello', 'world');
console.log(values);




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



