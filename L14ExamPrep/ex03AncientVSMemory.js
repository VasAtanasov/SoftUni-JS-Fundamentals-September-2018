function getStringsFromMemory(array) {
    array = array.join(" ").split(/\s+/).map(Number);

    for (let i = 0; i < array.length - 6; i++) {
        if (array[i] === 32656 && array[i + 1] === 19759 && array[i + 2] === 32763) {
            let n = array[i + 4];
            let start = i + 6;
            let end = start + n;
            let sequence = array.slice(start, end);
            console.log(String.fromCharCode(...sequence));
            i += 6 + n - 1;
        }
    }
}

getStringsFromMemory(
    [
        "32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0",
        "0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0",
    ]
);

getStringsFromMemory(
    [
        "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0",
        "5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0",
        "75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101",
        "114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
    ]
);