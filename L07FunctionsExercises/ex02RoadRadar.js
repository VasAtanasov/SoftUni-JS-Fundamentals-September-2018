function getSpeed(array) {
    let areas = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20,
    };

    let area = array[1];
    let speedLimit = areas[area];
    let speed = array[0];

    if (speed > speedLimit + 40) {
        console.log("reckless driving");
    } else if (speed > speedLimit + 20) {
        console.log("excessive speeding");
    } else if (speed > speedLimit) {
        console.log("speeding");
    }
}

getSpeed([40, "city"]);
getSpeed([21, "residential"]);
getSpeed([120, "interstate"]);
getSpeed([200, "motorway"]);