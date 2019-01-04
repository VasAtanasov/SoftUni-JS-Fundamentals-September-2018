function testNumber(number) {
    let remainder = Math.abs(number) % 2;

    if (remainder === 0) {
        return "even";
    } else if (remainder === 1) {
        return "odd";
    } else {
        return "invalid"
    }
}

console.log(testNumber(5));
console.log(testNumber(8));
console.log(testNumber(1.5));