// const weekDay = function() {
//   const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
//                  "Thursday", "Friday", "Saturday"];
//   return {
//     name(number) { return names[number]; },
//     number(name) { return names.indexOf(name); }
//   };
// }();

// console.log(weekDay.number('Friday'));
// console.log(weekDay.name(4));



const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function(date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
    if (tag == "YYYY") return date.getFullYear();
    if (tag == "M") return date.getMonth();
    if (tag == "MMMM") return months[date.getMonth()];
    if (tag == "D") return date.getDate();
    if (tag == "Do") return ordinal(date.getDate());
    if (tag == "dddd") return days[date.getDay()];
  });
};

const {formatDate} = require("./format-date");

console.log(formatDate(new Date(2017, 9, 13), "D, dddd, YYYY"));
// returns 13, Friday, 2017