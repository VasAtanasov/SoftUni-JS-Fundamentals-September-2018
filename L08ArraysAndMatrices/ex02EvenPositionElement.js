function getEvenPositionElement(array) {
    console.log(array.filter((value,index) => index % 2 === 0).join(" "))
}

getEvenPositionElement(['20', '30', '40']);
getEvenPositionElement(['5', '10']);