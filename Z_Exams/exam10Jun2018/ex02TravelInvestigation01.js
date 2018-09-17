function solve(array) {
    let companies = array.shift()
        .split(array.shift())
        .map(str => str.trim());

    let sentences = {
        valid: [],
        invalid: []
    };

    for (let sentence of array) {
        let matches = 0;
        for (const company of companies) {
            if (sentence.toLowerCase().indexOf(company) !== -1) {
                matches++;
            }
        }

        if (matches === companies.length) {
            sentences.valid.push(sentence.toLowerCase());
        } else {
            sentences.invalid.push(sentence.toLowerCase());
        }
    }

    if (sentences.valid.length > 0) {
        console.log('ValidSentences');
        console.log(sentences.valid.map((s, i) => `${i + 1}. ${s}`).join('\n'));
    }

    if (sentences.valid.length > 0 && sentences.invalid.length > 0) {
        console.log('='.repeat(30));
    }

    if (sentences.invalid.length > 0) {
        console.log('InvalidSentences');
        console.log(sentences.invalid.map((s, i) => `${i + 1}. ${s}`).join('\n'));
    }

}

solve(
    [
        "bulgariatour=>, minkatrans=>, koftipochivkaltd=>, parinavqturaood",
        "=>,",
        "parinavqturaood e KoftiPochivkaLTD det tui  ve onui minkatrans bulgariatour",
        "dqdo bulgariatour KoftiPochivkaLTD regexsux but is parinavqturaood MinkaTrans",
        "bulgariatour KOFTIPOCHIVKAlTD as parinavqturaood and MinkATRANs",
    ]
);
console.log();
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
        "Mincho   e  KoftiPochivkaLTD Tip 123   ve MinkaTrans BulgariaTour",
        "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
        "dqdo BuLGariaTOUR mraz  some text but is KoftiPochivkaLTD minkaTRANS",
    ]
);