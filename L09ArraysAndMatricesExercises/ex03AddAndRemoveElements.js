function arrayManipulation(array) {
    let result = [];
    for (let i = 0, number = 1; i < array.length; i++, number++) {
        let command = array[i];
        switch (command) {
            case "add":
                result.push(number);
                break;
            case "remove":
                result.pop();
                break;
        }
    }
    if (result.length === 0) {
        console.log("Empty");
    } else {
        result.forEach(x => console.log(x));
    }
}

arrayManipulation(["add", "add", "add", "add"]);
console.log()
arrayManipulation(["add", "add", "remove", "add", "add"]);