// try {
//     console.log('This is a trial')

//     unicycle;

//     console.log('This will not run coz of error above')
// } catch(err) {
//     console.log('Error has occured: ' + err) // shows what is the error
// } finally {
//     console.log('This will always run')
// }

let json = '{ "name":"sai", "age":25 }';
try{
    let user = JSON.parse(json); // converts JSON string into js object

    console.log(user.name)
    if(!user.address){
        throw new SyntaxError("Incomplete data: No address")
    }
} catch(err){
    console.log(err.message) // err.name gives "SyntaxError"
}