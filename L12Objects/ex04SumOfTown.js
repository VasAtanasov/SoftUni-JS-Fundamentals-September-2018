function getSum(array) {
    let towns = {};

    for (let i = 0; i < array.length; i += 2) {
        let town = array[i];
        let income = Number(array[i + 1]);
        if (!towns.hasOwnProperty(town)) {
            towns[town] = 0;
        }
        towns[town] += income;
    }

    console.log(JSON.stringify(towns));
}

getSum(["Sofia","20","Varna","3","Sofia","10"]);