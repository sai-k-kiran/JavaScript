const fruits = ['banana', 'figs', 'apple', 'orange'];
console.log(fruits.sort()) // [ 'apple', 'banana', 'figs', 'orange' ]

console.log(fruits.reverse()) // [ 'orange', 'apple', 'figs', 'banana' ]

const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return b - a})); // [ 100, 40, 25, 10, 5, 1 ] desc order

console.log(points.sort(function(a, b){return a - b}));  // [ 1, 5, 10, 25, 40, 100 ] asc order

// When the sort() function compares two values, it sends the values to the compare function, 
// and sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative a is sorted before b.
// If the result is positive b is sorted before a.
// If the result is 0 no changes are done with the sort order of the two values.

// The compare function compares all the values in the array, two values at a time (a, b).
// When comparing 40 and 100, the sort() method calls the compare function(40, 100).
// The function calculates 40 - 100 (a - b), and since the result is negative (-60), 
// the sort function will sort 40 as a value lower than 100.

points.sort(function(a, b){return 0.5 - Math.random()}); // random every time

// Fisher Yates method for randomizing numbers

function myFunction() {
    for (let i = points.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = points[i]
      points[i] = points[j]
      points[j] = k
    }
}

points.sort(function(a, b){return a-b}); // asc order
points[0] // lowest number

points.sort(function(a, b){return b-a}); // desc order
points[0] // highest number

var c = Math.max.apply(null, points)
console.log('Highest num: '+c)  // highest number i.e 100

var x = Math.min.apply(null, points);
console.log('Lowest num: '+ x); // Lowest number i.e 1  

function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  } // fn for highest number

  function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  } // fn for lowest number

  const cars = [
    {type:"BMW", year:2010},
    {type:"Saab", year:2001},
    {type:"Volvo", year:2016}
  ];

  displayCars(); // TO display cars

function myFunction() {
  cars.sort(function(a, b){return a.year - b.year});
  displayCars();
}

function displayCars() {
  document.getElementById("demo").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
} // displays cars by year in asc order

function myFunction() {
    cars.sort(function(a, b){
      let x = a.type.toLowerCase();
      let y = b.type.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    displayCars();
  } // display cars alphabetically

  const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value) {
  txt += value + "<br>"; 
} // displays number line by line