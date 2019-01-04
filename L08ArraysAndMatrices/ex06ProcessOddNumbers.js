function processNumbers(array) {
    console.log(array.filter((e, i) => i % 2 === 1)
        .map(e => e * 2)
        .reverse()
        .join(" "));
}


function processNumbers01(array) {
    let result = [];
    for (let i = 1; i < array.length; i += 2) {
        result.unshift(array[i] * 2);
    }
    console.log(result.join(" "));
}

processNumbers([10, 15, 20, 25]);
processNumbers([3, 0, 10, 4, 7, 3]);
