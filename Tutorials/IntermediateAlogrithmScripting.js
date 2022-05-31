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

/*Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order */

function diffArray(arr1, arr2) {
    const newArr = [];
  
    function onlyInFirst(first, second) {
      // loop through the array to find elements that don't exit in the second array. 
      for (let i = 0; i < first.length; i++) {
        // push elements unique on first array to new Array.
        if (second.indexOf(first[i]) === -1) {
          newArr.push(first[i]); // pushes the element to the new Array.
        }
      }
    }
  
    onlyInFirst(arr1, arr2)
    onlyInFirst(arr2, arr1)
    console.log(newArr);
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  //Cleaner solution. 

  function diffArray(arr1, arr2) {
    const newArr = [];
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  /*Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.*/