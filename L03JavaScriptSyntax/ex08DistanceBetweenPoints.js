function getDistance(xA, yA, xB, yB) {
    let pointA = {x: xA, y: yA};
    let pointB = {x: xB, y: yB};

    let distanceX = Math.pow(pointA.x - pointB.x, 2);
    let distanceY = Math.pow(pointA.y - pointB.y, 2);
    return Math.sqrt(distanceX + distanceY);
}

console.log(getDistance(2, 4, 5, 0));