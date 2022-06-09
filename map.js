// This example multiplies each array value by 2:

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction); // myFunction is the callback fn here

// function myFunction(val) {
//   console.log(val * 2); // return val * 2;
// }

// The filter() method creates a new array with array elements that passes a test.
// This example creates a new array from elements with a value larger than 18:

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value) {
    if(value > 18){        // OR return value > 18;
        console.log(value);
    }
}

// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array.

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total, value) {
  return total + value;
}  // returns "The sum is 99"

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 1);  // '1' is the initial value which is also added in the total 

document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total, value) {
  return total + value;
}  // returns "The sum is 100"

// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
// The reduceRight() works from right-to-left in the array.

const numbers = [45, 4, 9, 16, 25];
let sum = numbers1.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
} // returns "The sum is 99"

// The every() method check if all array values pass a test.
// This example check if all array values are larger than 18

const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

document.getElementById("demo").innerHTML = "All over 18 is " + allOver18;

function myFunction(value) {
  return value > 18;
} // returns "All over 18 is false"

// The some() method check if some array values pass a test.

const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} // returns "Some over 18 is true"

const fruits = ["Apple", "Orange", "Banana", "Mango"];
let position = fruits.indexOf("Mango") + 1; // insert the elem of which you want index 

document.getElementById("demo").innerHTML = "Mango is found in position " + position;
// returns "Mango is found in position 4"

// Array.indexOf() returns -1 if the item is not found.

// If the item is present more than once, it returns the position of the first occurrence.

// array.indexOf(item, start) --> 
// item = Required. The item to search for.
// start = Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.

// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;

document.getElementById("demo").innerHTML = "Apple is found in position " + position;
// returns "Apple is found in position 3" bcoz there are 2 "apple" elems and the last "Apple" is at 2(+1) index 

// array.lastIndexOf(item, start) --> same as array.indexOf(item, start)

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true 

// find() method returns the value of the first array element that passes a test function.

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

document.getElementById("demo").innerHTML = "First number over 18 is " + first;

function myFunction(value, index, array) {
  return value > 18;
} // returns "First number over 18 is 25"

// findIndex() method returns the index of the first array element that passes a test function.

const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} // returns "First number over 18 has index 3"

const myArr = Array.from("ABCDEFG"); // returns [A,B,C,D,E,F,G]

// Array.keys() method returns an Array Iterator object with the keys of an array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
} // returns every elem (0,1,2,3) on a new line