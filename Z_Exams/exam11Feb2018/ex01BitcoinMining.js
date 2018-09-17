function solve(array) {
    const ONE_BITCOIN_IN_BGN = 11949.16;
    const GRAM_GOLD_IN_BGN = 67.51;

    let firstDayBought = 0;
    let totalMoney = 0;
    let bitcoins = 0;

    for (let i = 0, day = 1; i < array.length; i++, day++) {
        let gold = Number(array[i]);
        gold = day % 3 === 0 ? gold * 0.7 : gold;
        totalMoney += (GRAM_GOLD_IN_BGN * gold);

        while (totalMoney >= ONE_BITCOIN_IN_BGN) {
            bitcoins++;
            totalMoney -= ONE_BITCOIN_IN_BGN;
            if (bitcoins === 1 && firstDayBought === 0) {
                firstDayBought = day;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`)
    if (firstDayBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBought}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}

solve([100, 200, 300]);
console.log();
solve([3124.15, 504.212, 2511.124]);