function printElements(array) {
    let n = Number(array.pop());
    for (let i = 0; i < array.length; i += n) {
        console.log(array[i]);
    }
}

printElements([5, 20, 31, 4, 20, 2]);
printElements(["dsa", "asd", "test", "tset", "2"]);