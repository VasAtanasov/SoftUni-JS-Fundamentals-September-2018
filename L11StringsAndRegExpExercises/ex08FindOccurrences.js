function findOccurrences(sentence, word) {
    let matches = sentence.match(new RegExp("\\b" + word + "\\b", "gi"));
    console.log(matches === null ? 0 : matches.length);
}

findOccurrences("The waterfall was so high, that the child couldn’t see its peak.", "the");
findOccurrences("The waterfall was so high, that the child couldn’t see its peak.");