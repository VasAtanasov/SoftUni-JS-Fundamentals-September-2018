function sortingArray(array) {
    array.sort(customSort).forEach(x => console.log(x));

    function customSort(a, b) {
        let index = a.length - b.length;
        a = a.toLowerCase();
        b = b.toLowerCase();
        return index !== 0 ? index : (a < b ? -1 : (a > b ? 1 : 0));
    }
}

function sortingArray(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (getComparatorIndex(array[j], array[j + 1]) > 0) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    array.forEach(x => console.log(x));

    function getComparatorIndex(a, b) {
        let index = a.length - b.length;
        a = a.toLowerCase();
        b = b.toLowerCase();
        return index !== 0 ? index : (a < b ? -1 : (a > b ? 1 : 0));
    }
}

function sortingArray(array) {
    console.log(array.sort(customSort).join("\n"));

    function customSort(a, b) {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
        } else if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    }
}

function sortingArray(array) {
    console.log(array
        .sort()
        .sort((a, b) => a.length - b.length)
        .join("\n"));
}

sortingArray(["alpha", "beta", "gamma"]);
console.log();
sortingArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log();
sortingArray(["test", "Deny", "omen", "Default"]);