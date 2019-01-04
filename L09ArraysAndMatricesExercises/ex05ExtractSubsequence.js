function filterNumbers(array) {
    let result = [];
    let currentMax = array[0];
    result.push(currentMax);
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= currentMax) {
            result.push(array[i]);
            currentMax = array[i];
        }
    }
    result.forEach(x => console.log(x));
}

filterNumbers([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log()
filterNumbers([1, 2, 3, 4]);
console.log()
filterNumbers([20, 3, 2, 15, 6, 1]);