var readlineSync = require("readline-sync")
var chalk = require("chalk")
console.log(chalk.blue("*****************"))
var userName= readlineSync.question(chalk.red("what is your name?"))
console.log(chalk.blue("*****************"))

var dateOfBirth=readlineSync.question(chalk.red(userName+", What is your date of birth in dd/mm/yyyy format?"))
var year= dateOfBirth.substr(6,4)
function leapYearFounder(year){
  if(year%4===0){
    if(year%100===0){
      if(year%400===0){
        console.log(chalk.red(userName+", you are born in a leap year!!!!!"))
      }else{
        console.log(chalk.red(userName+", you are not born in a leap year"))
      }
    

    }else{
        console.log(chalk.red(userName+",you are born in a leap year!!!"))}

  }
  else {
    console.log(chalk.red(userName+", you are not born in a leap year"))
  }
}
console.log(chalk.blue("*****************"))
leapYearFounder(year)
console.log(chalk.blue("*****************"))

