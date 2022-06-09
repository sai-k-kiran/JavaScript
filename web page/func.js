// Named fnctions
function funky(music, play){
    if (play){
        console.log('Playing: ' + music);
    }
}

// UNnnamed/Anonymous functions
const funky = function(music, play){
    if (play){
        console.log('Playing: ' + music);
    }
}

// // Arrow functions
const funky = (music, play) => {
    if (play){
        console.log('Playing: ' + music);
    }  
}

funky('Take on me', true)