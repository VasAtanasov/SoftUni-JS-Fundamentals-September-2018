function solve(meals, commandsArray) {
    let mealsEaten = 0;
    let commands = {
        "Serve": function () {
            if (meals.length > 0) {
                console.log(`${meals.pop()} served!`)
            }
        },
        "Eat": function () {
            if (meals.length > 0) {
                let meal = meals.shift();
                mealsEaten++;
                console.log(`${meal} eaten`)
            }
        },
        "Add": function (input) {
            let tokens = input.split(/\s+/);
            if (tokens.length > 1) {
                meals.unshift(tokens[1]);
            }
        },
        "Shift": function (input) {
            let [command, fromIndex, toIndex] = input.split(/\s+/);
            fromIndex = Number(fromIndex);
            toIndex = Number(toIndex);
            if (isValidIndex(fromIndex) && isValidIndex(toIndex)) {
                let temp = meals[toIndex];
                meals[toIndex] = meals[fromIndex];
                meals[fromIndex] = temp;
            }
        },
        "Consume": function (input) {
            let [command, start, end] = input.split(/\s+/);
            start = Number(start);
            let count = (Number(end) + 1) - start;
            if (isValidIndex(start) && isValidIndex(Number(end))) {
                mealsEaten += meals.splice(start, count).length;
                console.log("Burp!");
            }
        },
    };

    for (let i = 0; i < commandsArray.length; i++) {
        if ("End" === commandsArray[i]) {
            break;
        }
        let command = commandsArray[i].split(/\s+/)[0];
        commands[command](commandsArray[i])
    }

    if (meals.length === 0) {
        console.log("The food is gone");
    } else {
        console.log(`Meals left: ${meals.join(", ")}`)
    }
    console.log(`Meals eaten: ${mealsEaten}`);

    function isValidIndex(index) {
        return index >= 0 && index < meals.length;
    }
}

solve(
    ['chicken', 'steak', 'eggs'],
    [
        'Serve',
        'Eat',
        'End',
        'Consume 0 1'
    ]
);
console.log();
solve(
    ['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    [
        'Add spaghetti',
        'Shift 0 1',
        'Consume 1 4',
        'End'
    ]
);
console.log();
solve(
    ['carrots', 'apple', 'beet'],
    [
        'Consume 0 2',
        'End',
    ]
);