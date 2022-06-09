function request(company){
    return new Promise((resolve, reject) => {
        console.log(`Making a request to ${company}`)
        if (company == 'Google'){
            resolve('Request initiated')
        } else{
            reject('You cant make a request to this company')
        }
    })
}

request('Google').then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
}) --> returns "Making a request to Google" "Request initiated" if entered 'Google' as a parameter
       OR "You cant make a request to this company" if entered any other company as a parameter


-------------------------------------------------

function process(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing request')
        resolve(`Extra information + ${response}`)
    })
}

request('Google').then(message =>{
    console.log('Response received')
    return process(message)
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(message => {
    console.log(message)
}) --> returns Making a request to Google, Response received, Processing request, Extra information + Request initiated


------------ASYNC/AWAIT---------

async function doWork(){
    try{
      const req = await request('Uber')
        console.log('Request received')
        const processed = await process(req)
        console.log(processed)  
    } catch (messgage) {
        console.log(messgage)
    }
    
}

doWork()--> returns Making a request to Google, Response received, Processing request, Extra information + Request initiated

OR "You cant make a request to this company" if entered any other company as a parameter