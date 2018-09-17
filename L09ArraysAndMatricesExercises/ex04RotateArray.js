function rotate(array) {
    let rotations = Number(array.pop()) % array.length;
    while (rotations-- > 0) {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            result[(i + 1) % array.length] = array[i];
        }
        array = result;
    }

    console.log(array.join(" "));
}

function rotate(array) {
    let rotations = Number(array.pop()) % array.length;
    while (rotations-- > 0) {
        let lastElement = array[array.length - 1];
        for (let i = array.length - 1; i >= 0; i--) {
            array[i] = array[i - 1];
        }
        array[0] = lastElement;
    }

    console.log(array.join(" "));
}

function rotate(array) {
    let rotations = Number(array.pop()) % array.length;
    while (rotations-- > 0) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    console.log(array.join(" "));
}

rotate([1, 2, 3, 4, 2]);
rotate(["Banana", "Orange", "Coconut", "Apple", "15"]);