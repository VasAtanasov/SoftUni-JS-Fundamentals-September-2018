function solve(array) {
    array = array.map(Number);
    let maxProduct = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < array.length - 1; i++) {
        if (inRange(array[i])) {
            let product = 1;
            let end = Math.min(array.length, i + array[i] + 1);
            for (let j = i + 1; j < end; j++) {
                product *= array[j];
            }
            if (product > maxProduct) {
                maxProduct = product
            }
        }
    }

    console.log(maxProduct);

    function inRange(number) {
        return number >= 0 && number < 10;
    }
}

solve(
    [
        10,
        20,
        2,
        30,
        44,
        3,
        56,
        20,
        24
    ]
);
console.log();
solve(
    [
        100,
        200,
        2,
        3,
        2,
        3,
        2,
        1,
        1
    ]
);
