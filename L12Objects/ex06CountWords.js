function getWordCount(array) {
    array = array.join(" ").toLowerCase();
    let words = array.split(/[^\w+]/).filter(String);
    let wordsCount = new Map();
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (!wordsCount.has(word)) {
            wordsCount.set(word, 0);
        }
        wordsCount.set(word, wordsCount.get(word) + 1);
    }

    Array.from(wordsCount.keys())
        .sort()
        .forEach(w =>
            console.log(`'${w}' -> ${wordsCount.get(w)} times`));
}

getWordCount(["Far too slow, you're far too slow."]);