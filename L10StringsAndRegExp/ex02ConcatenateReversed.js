function concatReverse(array) {
    console.log(array.join("").split("").reverse().reduce((a, b) => a + b));
}

concatReverse(['I', 'am', 'student']);
concatReverse(['race', 'car']);