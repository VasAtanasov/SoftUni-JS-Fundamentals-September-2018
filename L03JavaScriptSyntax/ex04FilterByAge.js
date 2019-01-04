"use strict";

function filterByAge(filter, firstPerson, firstPersonAge, secondPerson, secondPersonAge) {
    let objOne = {name: firstPerson, age: firstPersonAge};
    let objTwo = {name: secondPerson, age: secondPersonAge};
    
    if (objOne.age >= filter) {
        console.log(objOne);
    }
    if (objTwo.age >= filter) {
        console.log(objTwo);
    }
}

filterByAge(12, 'Ivan', 15, 'Asen', 9);