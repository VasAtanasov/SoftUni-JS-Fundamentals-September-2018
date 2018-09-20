function getLastDay([day, month, year]) {
    return new Date(year, month - 1, 0).getDate();
}

console.log(getLastDay([17, 3, 2002]));
console.log(getLastDay([13, 12, 2004]));