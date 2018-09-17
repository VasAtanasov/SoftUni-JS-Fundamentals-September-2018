function primeChecker(number) {
    if (number < 0 || number === 0 || number === 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0)
            return false;
    }
    return true;
}

console.log(primeChecker(7));
console.log(primeChecker(8));
console.log(primeChecker(81));