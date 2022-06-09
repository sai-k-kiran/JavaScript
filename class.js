var shuttle = function(planet){
    this.planet =planet;
}
var joke = new shuttle('kepler')
console.log(joke.planet)

class Shuttle {
    constructor(planet){
        this.planet = planet
    }
}

var sturge =new Shuttle('Beetlejuice')

console.log(sturge.planet)

function makeClass(){
    class thermo{
        constructor(temp){
            this._temp = 5/9 * (temp - 32);
        }
        get Temperature(){
            return this._temp;
        }
        set Temperature(update){
            this._temp = update;
        }
    }
    return thermo
}

var lop = makeClass();
const thermos =  new lop(98.6);
let temp = thermos.Temperature;
console.log(temp);

thermos.Temperature = 26;
temp = thermos.Temperature
console.log(temp)