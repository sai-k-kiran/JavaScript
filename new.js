function User(name){
    this.name = name,
    this.isAdmin = false
}

const user = new User('John')

console.log(user.name);
console.log(user.isAdmin)

// Constructor functions should only be called using new. 
// Such a call implies a creation of empty this at the start and returning the populated one at the end

function User(name) {
    this.name = name;
    this.sayHi = function() {
        alert(this.name + " says HI!")
    }
}

let john = new User('John');

john .sayHi()  // John says HI!



function Calculator() {
    this.sum = function() {
        return this.a + this.b;
    },
    this.mul= function() {
        return this.a * this.b;
    },
    this.read= function() {
        this.a = +prompt('a', 0);   // same as parseInt(promt...), converts string to int
        this. b = +prompt('b', 0);
    }
}

let calc = new Calculator()
calc.read()
console.log("Sum is: " + calc.sum())




function Accumulator(startingValue){
    this.currentValue = startingValue;

    this.read = function(){
        this.addedValue = +prompt('value', 0);
    },

    this.value = function(){
        return this.addedValue + this.currentValue
    }
}

let acc = new Accumulator(3);
acc.read()

console.log("Starting value: " + acc.currentValue);  // .currentValue is a property so '()' at the ending is not required
console.log("Added Value: " + acc.addedValue) // .addedValue is a property so '()' at the ending is not required
console.log( "Total: " + acc.value() ) //  .value is a method so '()' at the ending is required



function accumulator(starting) {
    this. value = starting;
    
    this.read= function() {
        this.value += +prompt('number', 0)
    }
}
let accu = new accumulator(2);
accu.read()
accu.read()

console.log(accu.value)