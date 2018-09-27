function calculate(a, b, op) {
    let operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
    };
    return operations[op](a,b);
}

console.log(calculate(2, 4, '+'));
console.log(calculate(3, 3, '/'));
console.log(calculate(18, -1, '*'));
