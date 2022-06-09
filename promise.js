let p = new Promise((resolve, reject) => {
    let a = 1+3;
    if (a == 2){
        resolve('Success')
    } else{
        reject('Failed')
    }
})

p.then((message) =>{
    console.log('Yes')
}).catch((message) => {
    console.log('No')
})