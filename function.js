function size(lengths, width, height){
    var area = lengths * width;
    var vol = lengths * width * height;
    var sizes = [area, vol];
    return sizes;
}

var Area = size(3, 4, 5)[0];
var volume = size(3,4,5)[1];

console.log("Area is: "+Area)
console.log("Volume is: "+volume)

// ANONYMOUS FUNCTION
var sum = function(a,b){
    return a+b;
} 

console.log("Sum is: "+sum(3,5))

//  CIR IS NOT A Fn BUT IT STORES TEH VALUE OF THE Fn
var cir = (function(){
    const PI = 3.14;
    var rad = 3;
    return 2*PI*rad;
}());

console.log(cir)