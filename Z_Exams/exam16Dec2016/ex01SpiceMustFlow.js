function solve([startingYield]) {
    let currentYield = Number(startingYield);
    const YIELD_DROP_PER_DAY = 10;
    const WORKER_CONSUMPTION = 26;
    const INEFFICIENT_YIELD = 100;
    let collectedYield = 0;
    let miningDays = 0;

    while (currentYield >= INEFFICIENT_YIELD) {
        collectedYield += (currentYield - WORKER_CONSUMPTION);
        currentYield -= YIELD_DROP_PER_DAY;
        miningDays++;

        if (currentYield < INEFFICIENT_YIELD) {
            collectedYield -= WORKER_CONSUMPTION;
        }
    }

    console.log(miningDays);
    console.log(collectedYield);
}

solve(["111"]);
console.log();
solve(["450"]);
console.log();
solve(["200"]);