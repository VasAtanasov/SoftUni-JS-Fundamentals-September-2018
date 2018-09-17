function solve(document) {
    if (!/<svg>.*?<\/svg>/.test(document)) {
        console.log("No survey found");
        return;
    }
    let categoryRegex = /<cat><text>.*\[(.*)].*<\/text><\/cat>\s*<cat>.*<\/cat>/;
    let categoryMatch = categoryRegex.exec(document);
    if (!categoryMatch) {
        console.log("Invalid format");
        return;
    }
    let surveyLabel = categoryMatch[1].trim();

    let ratingRegex = /<g><val>([0-9]{1,2})<\/val>([0-9]+)<\/g>/g;
    let match;
    let totalValue = 0;
    let totalVotes = 0;
    while (match = ratingRegex.exec(document)) {
        let votes = Number(match[2]);
        let value = Number(match[1]);
        if (value > 10 && value < 1) {
            continue;
        }
        totalValue += (value * votes);
        totalVotes += votes;
    }

    let averageRaining =  totalValue / totalVotes;

    console.log(`${surveyLabel}: ${Number(averageRaining.toFixed(2))}`);
}

solve("<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>");
console.log();
solve("<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>");
console.log();
solve("<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It's great, don't mess with it!</p><p>I'd like to have the option for delivery</p>");
console.log();
solve("<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>");

