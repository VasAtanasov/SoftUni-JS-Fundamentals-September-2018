function checkPoint(inputArray) {
    let [x, y, xMin, xMax, yMin, yMax] = inputArray;
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log("inside");
    } else {
        console.log("outside");
    }
}

checkPoint([8, -1, 2, 12, -3, 3]);