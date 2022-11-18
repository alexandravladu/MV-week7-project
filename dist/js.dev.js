"use strict";

// function countdown(n) {
//   let counter = n + 1;
//   while (counter <= 100) {
//     counter --;
//     console.log(counter)
//     break;
//   } 
// }
// countdown(3)
// countdown(90)
// function StringGame(str, letter) {
//   // let sentence = str.trim()
//   let counting_letter = 0
//   for (let i = 0; i < str.length; i++) {
//     if(str.charAt(i) == letter) {
//       counting_letter +=1
//     }
//   }
//   return letter
// }
// console.log(StringGame('Alexandra', 'a'))
// const StringGame2 = (str) => {
//   let counter = 1;
//   let points = 0
//   for(let j = 0; j < str.length; j++) {
//     if(str[j] === str[j +1]) {
//       counter++
//       points++
//     }else {
//       console.log(`${str[j]} occurs ${counter} times and you get ${points} pooints`);
//       counter = 1;
//     }
//   }
// }
// StringGame2("Alexandra")
for (var year = 1999; year <= 2030; year++) {
  for (var month = 0; month < 12; month++) {
    var thirteen = new Date(year, month, 12);

    if (thirteen.getDay() == 5) {
      var monthsArray = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];
      console.log('Friday 13 is on ' + monthsArray[month] + ' ' + year);
    }
  }
}