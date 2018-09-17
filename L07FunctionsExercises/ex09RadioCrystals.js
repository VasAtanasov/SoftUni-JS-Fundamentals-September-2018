function processChunks(parametersArray) {
    let targetThickness = parametersArray[0];

    for (let i = 1; i < parametersArray.length; i++) {
        let operations = {
            0: {name: "Cut", action: x => x / 4, timeUsed: 0},
            1: {name: "Lap", action: x => x * 0.8, timeUsed: 0},
            2: {name: "Grind", action: x => x - 20, timeUsed: 0},
            3: {name: "Etch", action: x => x - 2, timeUsed: 0},
            4: {name: "X-ray", action: x => x + 1, timeUsed: 0},
        };

        let quartz = parametersArray[i];
        console.log(`Processing chunk ${quartz} microns`);
        let currentOperation = 0;

        while (true) {
            let op = operations[currentOperation];
            if (quartz === targetThickness) {
                break
            }

            if (op.action(quartz) >= targetThickness) {
                op.timeUsed++;
                quartz = op.action(quartz);
            } else if (currentOperation === 3) {
                quartz = operations[4].action(quartz);
                operations[4].timeUsed++;
                currentOperation = (currentOperation + 1) % 4;
            } else {
                currentOperation = (currentOperation + 1) % 4;
            }

            quartz = Math.floor(quartz);
        }

        print(operations);
        console.log(`Finished crystal ${quartz} microns`);
    }

    function print(operations) {
        for (let i = 0; i < 4; i++) {
            let op = operations[i];
            if (op.timeUsed > 0) {
                console.log(`${op.name} x${op.timeUsed}`);
                console.log("Transporting and washing");
            }
        }

        if (operations[4].timeUsed > 0) {
            console.log(`${operations[4].name} x${operations[4].timeUsed}`);
        }
    }
}

// processChunks([100, 99]);
processChunks([1375, 50000]);