function aggregateElements(array) {
    function aggregate(array, initialValue, func) {
        for (let i = 0; i < array.length; i++) {
            initialValue = func(initialValue, array[i]);
        }
        console.log(initialValue);
    }

    aggregate(array, 0, (a, b) => a + b);
    aggregate(array, 0, (a, b) => a + 1 / b);
    aggregate(array, "", (a, b) => a + b);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);