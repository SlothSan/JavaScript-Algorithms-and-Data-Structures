/*Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.*/

function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]); //Get max in array.
    let min = Math.min(arr[0], arr[1]); //Get min in array. 
    let sumBetween = 0; // create variable to iterate over. 
    for (let i = min; i <= max; i++) { // start at min number (1) if i is less than max number (4) i++ and add i to the variable. 
      sumBetween += i;
    }
    return(sumBetween);
    }
    
    sumAll([1, 4]);