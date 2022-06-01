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

function destroyer(arr) {
  const valsToDestroy = Object.values(arguments).slice(1); //get values to remove and assign to a variable.
  const filteredArray = []; //setup an empty array to push filtered items into.

  for (let i = 0; i < arr.length; i++) { //loop through the whole array. 
    let removeElement = false; // set removeElement to false intially. 
    for (let j = 0; j < valsToDestroy.length; j++) { // for each item in the array loop through the vals to destroy.
      if (arr[i] === valsToDestroy[j]) { //if array value matches values to destroy set remove element to true.
        removeElement = true;
      }
    }
    if (!removeElement) { //if remove element = false push the current element to the filteredArray.
      filteredArray.push(arr[i]);
    }
  }
  console.log(filteredArray);
  return filteredArray; //return the filtered array. 
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Cleaner ways of doing the above. 

function destroyer(arr) {
  const valsToDestroy = Array.from(arguments).slice(1); //create the array from arguments 
  return arr.filter(function(val) { //Return the filtered array, using includes() in the callback function to check if val is not in valsToRemove; returning true to keep the value in the original array or false to remove it.
    return !valsToDestroy.includes(val);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//Even cleaner way of doing the above. 

function destroyer(arr, ...valsToRemove)  { //use spread operator to retrieve the arguments and pass to a variable
  return arr.filter(elem => !valsToRemove.includes(elem)); //return the filtered array using .includes()
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/*Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument */

