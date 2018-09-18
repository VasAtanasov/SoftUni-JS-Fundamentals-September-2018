// function isLeapYear(year) {
//     if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//         console.log('yes');
//     } else {
//         console.log('no');
//     }
// }

function isLeapYear(year) {
    let leap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    console.log(leap ? "yes" : "no");
}

isLeapYear(1999);
isLeapYear(2000);
isLeapYear(1900);