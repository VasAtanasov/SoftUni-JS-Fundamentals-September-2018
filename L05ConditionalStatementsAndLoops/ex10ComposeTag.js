function getTag(parametersArray) {
    return `<img src="${parametersArray[0]}" alt="${parametersArray[1]}">`
}

console.log(getTag(['smiley.gif', 'Smiley Face']));