function tripLength(array) {
    let points = getPoints();
    let trips = [
        {string: "1->2->3", value: getTotalDistance(points[0], points[1], points[2])},
        {string: "1->3->2", value: getTotalDistance(points[0], points[2], points[1])},
        {string: "2->1->3", value: getTotalDistance(points[1], points[0], points[2])},
    ];

    trips.sort(sortAscendingByValue());
    console.log(`${trips[0].string}: ${trips[0].value}`);

    function sortAscendingByValue() {
        return (a, b) => a.value - b.value;
    }

    function getTotalDistance(pointA, pointB, pointC) {
        return distance(pointA.x, pointA.y, pointB.x, pointB.y) +
            distance(pointB.x, pointB.y, pointC.x, pointC.y);
    }

    function distance(x1, y1, x2, y2) {
        let x = x1 - x2;
        let y = y1 - y2;
        return Math.sqrt(x * x + y * y);
    }

    function getPoints() {
        let points = [];
        for (let i = 0, j = 0, id = 1; i < array.length; i += 2, j++, id++) {
            points[j] = {id: id, x: array[i], y: array[i + 1]}
        }
        return points;
    }
}

tripLength([0, 0, 2, 0, 4, 0]);
tripLength([5, 1, 1, 1, 5, 4]);
tripLength([-1, -2, 3.5, 0, 0, 2]);