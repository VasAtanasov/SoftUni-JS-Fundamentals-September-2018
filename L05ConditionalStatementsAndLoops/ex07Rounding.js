function roundNumbers(parameters) {
    let precision = parameters[1] > 15 ? 15 : parameters[1];
    return Number(parameters[0].toFixed(precision));
}


console.log(roundNumbers([3.1415926535897932384626433832795, 2]));
console.log(roundNumbers([10.5, 3]));