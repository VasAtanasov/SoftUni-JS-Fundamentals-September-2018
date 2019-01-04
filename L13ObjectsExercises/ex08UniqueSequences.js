function getUniqueSequences(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let currentArray = JSON.parse(array[i]).sort((a, b) => b - a);
        if (!contains(result, currentArray)) {
            result.push(currentArray);
        }
    }

    result.sort((a, b) => a.length - b.length)
        .forEach(arr => console.log(`[${arr.join(", ")}]`));

    function contains(result, currentArray) {
        for (let i = 0; i < result.length; i++) {
            if (result[i].length === currentArray.length) {
                if (equal(currentArray, result[i])) {
                    return true;
                }
            }
        }
        return false;
    }

    function equal(currentArray, array) {
        for (let i = 0; i < currentArray.length; i++) {
            if (currentArray[i] !== array[i]) {
                return false;
            }
        }
        return true;
    }
}


getUniqueSequences(['[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]']);