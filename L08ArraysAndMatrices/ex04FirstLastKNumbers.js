function getNumbers(array) {
    let k = array.shift();
    console.log(array.slice(0, k).join(" "));
    console.log(array.slice(-k).join(" "));
}

getNumbers([2, 7, 8, 9]);
getNumbers([3, 6, 7, 8, 9]);