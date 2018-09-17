function getBiggestElement(matrix) {
    console.log(matrix.reduce((a, b) => a.concat(b)).reduce((a, b) => Math.max(a, b)));
}

getBiggestElement(
    [
        [20, 50, 10],
        [8, 33, 145]
    ]
);

getBiggestElement(
    [
        [3, 5, 7, 12],
        [-1, 4, 33, 2],
        [8, 3, 0, 4]
    ]
);