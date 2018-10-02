function hideData(stringArray) {
    const NAME_REGEX = /\*[A-Z][A-Za-z]*(?= |$|\t)/g;
    const NUMBER_REGEX = /\+[0-9-]{10}(?= |$|\t)/g;
    const ID_REGEX = /![A-Za-z0-9]+(?= |$|\t)/g;
    const BASE_REGEX = /_[A-Za-z0-9]+(?= |$|\t)/g;

    stringArray.forEach(str => {
        str = str.replace(NAME_REGEX, getReplacementString);
        str = str.replace(NUMBER_REGEX, getReplacementString);
        str = str.replace(ID_REGEX, getReplacementString);
        str = str.replace(BASE_REGEX, getReplacementString);
        console.log(str);
    });

    function getReplacementString(match) {
        return "|".repeat(match.length);
    }
}

hideData(["Agent *Ivankov was in the room when it all happened.",
    "The person in the room was heavily armed.",
    "Agent *Ivankov had to act quick in order",
    "He picked up his phone and called some unknown number.",
    "I think it was +555-49-796",
    "I can't really remember...",
    "He said something about \"finishing work\" with subject !2491a23BVB34Q and returning to Base _Aurora21",
    "Then after that he disappeared from my sight.",
    "As if he vanished in the shadows.",
    "A moment, shorter than a second, later, I saw the person flying off the top floor.",
    "I really don't know what happened there.",]);