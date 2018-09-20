function converter(inches) {
    let feet = Math.floor(inches / 12);
    let remainder = Math.floor(inches % 12);

    console.log(`${feet}\'-${remainder}\"`);
}

converter(36);
converter(55);
converter(11);