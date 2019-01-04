function getNumberOfBoxes(numberOfBottles, capacity) {
    let boxes = numberOfBottles / capacity;
    console.log(Math.ceil(boxes));
}

getNumberOfBoxes(20,5);
getNumberOfBoxes(15,7);
getNumberOfBoxes(5,10);