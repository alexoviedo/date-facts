const moment = require('moment')
const chalk = require('chalk')


// =============================================================================

let date = chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
console.log(`It is ${date}.`)

let DOY = chalk.magenta(moment().format("DDDo"))
console.log(`It is the ${DOY} day of the year`)

let seconds = chalk.cyan(Math.floor((moment() - moment().startOf("day")) / 1000))
console.log(`It is ${seconds} seconds into the day`)


function daylight() {
  if (moment().isDST() == true) {
    return '';
  } else {
    return "not";
  }
}
console.log(`It is${chalk.green(daylight())} during Daylight Savings Time.`)


function Y() {
  if (moment().isLeapYear() == true) {
    return '';
  } else {
    return " not";
  }
}
let leapYear = chalk.red(Y())
console.log(`It is${leapYear} a leap year.`);
