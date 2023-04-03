// Create a function that takes an array with only numbers and returns the first element.
 
    function myArrFunc(arr) {
        return arr[0][0]
    }

console.log(myArrFunc([["Alex"],[1, 2, 3, 4, 5]]));
//Simple Function calling 2D array.

//Create a function that takes a number, increment the number by 1 and return the result

function inc(x) {
   return x += 1
}
//Function takes the value of x adds 1 to it and returns the new value.
console.log(inc(1))

//Create a function that takes and integer minutes and convert it to seconds.

function minToSec(min) {
    return (min * 60)
}
//Function takes (min) value and then times the value by 60 and returns it when invoked.
console.log(minToSec(2))