function distance3D(parameters) {
    let x1 = parameters[0];
    let y1 = parameters[1];
    let z1 = parameters[2];
    let x2 = parameters[3];
    let y2 = parameters[4];
    let z2 = parameters[5];

    let xDiff = x1 - x2;
    let yDiff = y1 - y2;
    let zDiff = z1 - z2;

    let horizontal = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

    return Math.sqrt(horizontal * horizontal + zDiff * zDiff);
}


console.log(distance3D([1, 1, 0, 5, 4, 0]));
console.log(distance3D([3.5, 0, 1, 0, 2, -1]));