var say = "No pain, no gain"

console.log("Length: "+say.length);
console.log("uppercase: "+say.toUpperCase());
console.log("char index: "+ say.charAt(3));
console.log("'g' is at: "+ say.indexOf('g'));
console.log('Splitting: ' + say.split('n'))

var arr = [1,2,3,4,5,6]

console.log(arr.length)

let we = 2.3345;
var ceel = Math.ceil(we);
console.log(ceel);

let flor = Math.floor(we);
console.log(flor);

let ran = Math.random() * 10;  // Math.random gives number btwn 0 and 1 only
console.log(Math.ceil(ran)); // Using ceil will give 1 - 10, floor will give 0-9

var todays = new Date();
console.log(todays.getHours() + ' : ' + todays.getMinutes());

console.log(todays.toDateString()); // To get date in readable form

function offerExpires (today) {
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    weekFromToday = new Date(today.getTime () + 7 * 24 * 60 * 60 * 1000) ;
  
    dayNames = [ 'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    monthNames =['January','February','March','April','May' ,'June','July','August','September','October','November','December'];
   
    day = dayNames[weekFromToday.getDay()];
    date= weekFromToday.getDate();
    month= monthNames[weekFromToday.getMonth()] ;
    year= weekFromToday.getFullYear() ;
   
    expiryMsg = 'Offer expires on: ';
    expiryMsg += day +' '+ date+ ' ' + month+',' +year;
    return expiryMsg;
}
today = new Date();
console.log(offerExpires(today));

var days= ['Sunt', 'Monr', 'tuee', 'wedq', 'thurz', 'frisd', 'satan']; //whatever you write here for weekdays, will be used only
let fol= days[today.getDay()];
console.log(fol);