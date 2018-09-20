function getObject(parametersArray) {
    let person = {};
    for (let i = 0; i < parametersArray.length; i += 2) {
        person[parametersArray[i]] = parametersArray[i + 1];
    }
    return person;
}

console.log(getObject(['name', 'Pesho', 'age', '23', 'gender', 'male']));
console.log(getObject(['ssid', '90127461', 'status', 'admin', 'expires', '600']));