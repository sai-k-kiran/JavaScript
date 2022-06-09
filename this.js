let user = {
    name:"sai",
    age:25
};

let admin = {
    name: "John",
    age:30
};

function sayHi() {
    console.log(this.name + " says Hi")
}

user.fn = sayHi;
admin.fn = sayHi;

admin.fn(); // returns John says Hi
user['fn']();  // returns sai says Hi

// Functions that are stored in object properties(name, age here) are called “methods”
// When a function is declared, it may use this, but that this has no value until the function is called.

let calculator = {
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
    read() {
        this.a = parseInt(prompt('a', 0));
        this.b = parseInt(prompt('b', 0));
    }
}

calculator.read()
console.log("The sum is: "+ calculator.sum() );
console.log("Product is: "+ calculator.mul() );


let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function() { // shows the current step
      alert( this.step );
    }
  };
  
  for (let i = 0; i<10; i++){ // exec ladder.up() 10 times
      ladder.up();
  }
  ladder.showStep()