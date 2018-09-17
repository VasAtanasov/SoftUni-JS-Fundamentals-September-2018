function solve(meals, commandsArray) {
    let mealsEaten = 0;
    let isEmpty = (array) => array.length === 0;
    let isValidCommand = (array, length) => array.length === length;
    let isValidIndex = (array, index) => index >= 0 && index < array.length;

    for (let element of commandsArray) {
        let tokens = element.split(/\s+/).map(String);
        let command = tokens[0];

        switch (command) {
            case 'Serve':
                if (isValidCommand(tokens, 1) && !isEmpty(meals)) {
                    console.log(`${meals.pop()} served!`);
                }
                break;
            case 'Eat':
                if (!isEmpty(meals)) {
                    console.log(`${meals.shift()} eaten`);
                    mealsEaten++;
                }
                break;
            case 'Add':
                if (isValidCommand(tokens, 2)) {
                    let meal = tokens[1];
                    meals.unshift(meal);
                }
                break;
            case 'Consume':
                if (isValidCommand(tokens, 3) && !isEmpty(meals)) {
                    let startIndex = Number(tokens[1]);
                    let endIndex = Number(tokens[2]);
                    if (isValidIndex(meals, startIndex) && isValidIndex(meals, endIndex)) {
                        let deleteCount = endIndex - startIndex + 1;
                        meals.splice(startIndex, deleteCount);
                        console.log('Burp!');
                        mealsEaten += deleteCount;
                    }
                }
                break;
            case 'Shift':
                if (isValidCommand(tokens, 3)) {
                    let targetIndex = Number(tokens[1]);
                    let destinationIndex = Number(tokens[2]);
                    if (isValidIndex(meals, targetIndex) && isValidIndex(meals, destinationIndex)) {
                        let temp = meals[targetIndex];
                        meals[targetIndex] = meals[destinationIndex];
                        meals[destinationIndex] = temp;
                    }
                }
                break;
            case 'End':
                if (isEmpty(meals)) {
                    console.log('The food is gone');
                } else {
                    console.log(`Meals left: ${meals.join(', ')}`);
                }
                console.log(`Meals eaten: ${mealsEaten}`);
                return;
        }

    }


}

//
// solve(
//     [
//         'chicken',
//         'steak',
//         'eggs'
//     ],
//     [
//         'Serve',
//         'Eat',
//         'End',
//         'Consume 0 1'
//     ]
// );
console.log();
solve(
    [
        'fries',
        'fish',
        'beer',
        'chicken',
        'beer',
        'eggs'
    ],
    [
        'Add spaghetti',
        'Shift 0 1',
        'Consume 1 4',
        'End'
    ]
);
console.log();
// solve(
//     [
//         'carrots',
//         'apple',
//         'beet'
//     ],
//     [
//         'Consume 0 2',
//         'End',
//     ]
// );