function calculatePostfixNotation(array) {
    let numbers = [];
    let operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
    };

    while (array.length > 0) {
        let element = array.shift();
        if (/[0-9]+/.test(element)) {
            numbers.push(element);
        } else {
            if (numbers.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }

            let secondNumber = numbers.pop();
            let firstNumber = numbers.pop();

            let result = operations[element](firstNumber, secondNumber);
            numbers.push(result);
        }
    }

    if (numbers.length > 1) {
        console.log("Error: too many operands!");
    } else {
        console.log(numbers[0]);
    }
}

calculatePostfixNotation(
    [
        3,
        4,
        '+'
    ]
);

calculatePostfixNotation(
    [
        5,
        3,
        4,
        '*',
        '-'
    ]
);

calculatePostfixNotation(
    [
        7,
        33,
        8,
        '-'
    ]
);

calculatePostfixNotation(
    [
        15,
        '/'
    ]
);

calculatePostfixNotation(
    [
        31,
        2,
        '+',
        11,
        '/'
    ]
);

calculatePostfixNotation(
    [
        -1,
        1,
        '+',
        101,
        '*',
        18,
        '+',
        3,
        '/'
    ]
);