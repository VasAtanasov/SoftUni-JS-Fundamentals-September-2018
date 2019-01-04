function wordsUppercase(input) {
    return input.split(/\W+/)
        .filter(w => w !== "")
        .map(w => w.toUpperCase())
        .join(", ")
}

console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('hello'));