function getWordCount(array) {
    array = array.join(" ");
    let words = array.split(/[^\w+]/).filter(String);
    let wordsCount = {};
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (!wordsCount.hasOwnProperty(word)) {
            wordsCount[word] = 0;
        }
        wordsCount[word]++;
    }

    console.log(JSON.stringify(wordsCount));
}


getWordCount(["Far too slow, you're far too slow."])