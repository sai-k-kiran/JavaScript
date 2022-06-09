// Creating an object by dot notation
var hotel = {
    name: 'ITC', // key : value pair, like a dictionary in python
    rooms: '40',
    booked: '25',
    gym : true,
    roomTypes : ['twin', 'double', 'suite'],

    avail : function() {    // method
    return this.rooms - this.booked;
    }
};
var name = hotel.name;
console.log(name)

var availability = hotel.avail();

console.log(availability)

// Using constructor notation
var student = new Object() //Creating an empty object 
student.name = 'sai';
student.education = 'B.E';
student.age = 25;

student.university = function(){
    return 'Gujarat Technological University';
}
console.log('Name: '+ student['name'])
console.log('University: '+ student.university())

// Creating multiple objects (by constructor notation)

function Park(grass, bench, type){
    this.grass = grass;    // "this" is similar to "self" in python classes
    this.bench = bench; 
    this.type = type;

    this.someFunc = function(){
        return "Function";
    };
}

var amc = new Park('lawn',6,'dog');   // Always use "new" when creating a new object this way
var tokyo = new Park('bamboo', 12, 'panda')
console.log(amc.grass)
console.log(tokyo.type)