function populationCounter(array) {
    let obj = {};

    array.forEach(x => {
        let arr = x.split(" <-> ");
        if (!obj.hasOwnProperty(arr[0])) {
            obj[arr[0]] = 0;
        }
        obj[arr[0]] += Number(arr[1]);
    });

    Object.keys(obj)
        .forEach(town =>  console.log(`${town} : ${obj[town]}`));
}

populationCounter(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);