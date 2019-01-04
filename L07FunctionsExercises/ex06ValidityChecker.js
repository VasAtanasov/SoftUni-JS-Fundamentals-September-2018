function checkValidity(pointsArray) {
    let x1 = pointsArray[0];
    let y1 = pointsArray[1];
    let x2 = pointsArray[2];
    let y2 = pointsArray[3];

    if (isValidDistance(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (isValidDistance(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (isValidDistance(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }


    function isValidDistance(distance) {
        return parseInt(distance) === distance;
    }

    function distance(x1, y1, x2, y2) {
        let x = x1 - x2;
        let y = y1 - y2;
        return Math.sqrt(x * x + y * y);
    }
}

checkValidity([3, 0, 0, 4]);
checkValidity([2, 1, 1, 1]);