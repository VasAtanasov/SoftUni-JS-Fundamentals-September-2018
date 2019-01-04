function insideVolume(parametersArray) {
    let x1 = 10;
    let x2 = 50;
    let y1 = 20;
    let y2 = 80;
    let z1 = 15;
    let z2 = 50;

    for (let i = 0; i < parametersArray.length; i += 3) {
        let x = parametersArray[i];
        let y = parametersArray[i + 1];
        let z = parametersArray[i + 2];
        if (isInside(x, x1, x2) && isInside(y, y1, y2) && isInside(z, z1, z2)) {
            console.log("inside");
        } else {
            console.log("outside");
        }
    }

    function isInside(point, lowerBorder, upperBorder) {
        return point >= lowerBorder && point <= upperBorder;
    }
}

insideVolume([8, 20, 22]);
insideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);