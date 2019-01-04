function getDistance(parameters) {
    let timeInHours = parameters[2] / 3600;
    let firstObjectDistance = parameters[0] * timeInHours;
    let secondObjectDistance = parameters[1] * timeInHours;

    console.log(Math.abs(firstObjectDistance - secondObjectDistance) * 1000);
}

getDistance([0, 60, 3600]);
getDistance([11, 10, 120]);
getDistance([5, -5, 40]);



