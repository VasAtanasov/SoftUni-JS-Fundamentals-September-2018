function aggregateTable(array) {
    let towns = [];
    for (let i = 0; i < array.length; i++) {
        let town = array[i].split("|");
        towns.push({townName: town[1].trim(), income: Number(town[2].trim())});
    }

    console.log(towns.map(town => town.townName).join(", "));
    console.log(towns.map(town => town.income).reduce((a, b) => a + b));
}


aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);