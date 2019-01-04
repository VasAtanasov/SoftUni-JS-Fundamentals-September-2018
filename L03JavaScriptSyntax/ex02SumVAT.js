"use strict";

function calculateVAT(input) {
    let sum = 0;
    for (let number of input) {
        sum += number
    }
    console.log(`sum = ${sum}`);
    let VAT = sum * 0.2;
    console.log(`VAT = ${VAT}`);
    let total = sum + VAT;
    console.log(`total = ${total}`);
}


calculateVAT([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);
calculateVAT([1.20, 2.60, 3.50]);
