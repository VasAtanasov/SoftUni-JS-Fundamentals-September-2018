function solve(array) {
    let [companiesString, delimiter] = array;
    let companies = companiesString.split(delimiter);
    let validSentences = [];
    let invalidSentences = [];

    for (let i = 2; i < array.length; i++) {
        let sentence = array[i].toLowerCase();
        if (isValidSentence(sentence)) {
            validSentences.push(sentence);
        } else {
            invalidSentences.push(sentence);
        }
    }

    if (validSentences.length > 0) {
        console.log("ValidSentences");
        for (let i = 0; i < validSentences.length; i++) {
            console.log(i + 1 + ". " + validSentences[i]);
        }
    }
    if (validSentences.length > 0 && invalidSentences.length > 0) {
        console.log("=".repeat(30));
    }
    if (invalidSentences.length > 0) {
        console.log("InvalidSentences");
        for (let i = 0; i < invalidSentences.length; i++) {
            console.log(i + 1 + ". " + invalidSentences[i]);
        }
    }

    function isValidSentence(sentence) {
        for (const company of companies) {
            if (!sentence.includes(company.trim())) {
                return false;
            }
        }
        return true;
    }
}

solve(
    [
        "bulgariatour@, minkatrans@, koftipochivkaltd",
        "@,",
        "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
        "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
        "someone continues as no "
    ]
);
console.log();
solve(
    [
        "bulgariatour@, minkatrans@, koftipochivkaltd",
        "@,",
        "Mincho  e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
        "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
        "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"
    ]
);