// console.log(dan) // returns 'undefined' but not an error coz var 'dan' is hoisted but its definition('I am defined') is not.

// var dan = 'I am defined'

// console.log(dan)

// func()  // Fn is called before declaration, coz of hoisting

// function func() {
//     console.log('I am a fn')
// }

// console.log(fill)  // Uncaught ReferenceError: Cannot access 'fill' before initialization co of 'let'

// let fill = 'I am a backspace'

// console.log(fill) // returns 'I am a backspace'


console.log(data)

const data = 'Debug console'

console.log(data)

// Variables declared with 'var' are hoisted to top but there definition isnt.
// Variables declared with 'let' and 'const' are not hoisted