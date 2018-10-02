function split(expression) {
    let elements = expression
        .split(/[\s.();,]+/);
    console.log(elements.join("\n"));
}

split('let sum = 4 * 4,b = "wow";');
console.log()
split('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');