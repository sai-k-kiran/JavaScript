var counter = (function() {
    var count = 0;
    function accumulate(val){  // this is a private method. This cant be accessed outside the fn ie no counter.accumulate()
        count += val
    }
    return{  
        increment : function(){ // these are public methods. these can be accessed outside the fn ie counter.inc..(), counter.value() 
            accumulate(1);
        },
        decrement : function() {
            accumulate(-1);
        },
        value: function() {
            return count;
        }
    }
})() // --> This is 'Immediately invoked function expression or IIFE' the parenthesis means that initialize var 'counter' & 
    // execute it simultaneously and store the return value in counter
    // We do not need to call the counter fn to execute it. It will directly execute itself

console.log(counter.value())  // returns 0 bcoz count = 0 on line 2

counter.increment(); // adds '1' to count i.e count = 1
counter.increment(); // adds '1' to count i.e count = 2
counter.increment(); // adds '1' to count i.e count = 3

console.log(counter.value())

counter.decrement() // subtracts '1' from count i.e count = 2

console.log(counter.value())

console.log(counter.accumulate(3)) // cant be used bcoz this is a private method