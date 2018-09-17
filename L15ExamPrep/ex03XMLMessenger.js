function validateMessage(message) {
    let globalMatch = /^<message((?:\s+[a-z]+="[A-Za-z0-9 .]+"\s*?)*)>((?:.|\n)+?)<\/message>$/gm.exec(message);
    if (globalMatch) {
        let attributeRegex = /([a-z]+)="([A-Za-z0-9 .]+)"/g;
        let [match, attributes, message] = globalMatch;
        let to = "";
        let from = "";
        let attributesMatch;
        while ((attributesMatch = attributeRegex.exec(attributes))) {
            let [match, key, value] = attributesMatch;
            if (key === "to") {
                to = value;
            } else if (key === "from") {
                from = value;
            }
        }
        if (to === '' || from === '') {
            console.log("Missing attributes");
            return;
        }
        message = message.replace(/\n/g, '</p>\n    <p>');
        let html = `<article>\n  <div>From: <span class="sender">${from}</span></div>\n`;
        html += `  <div>To: <span class="recipient">${to}</span></div>\n`;
        html += `  <div>\n    <p>${message}</p>\n  </div>\n</article>`;
        console.log(html);
    } else {
        console.log("Invalid message format");
    }
}

validateMessage("<message to=\"Bob\" from=\"Alice\" timestamp=\"1497254092\">Hey man, what's up?</message>");
console.log();
validateMessage("<message from=\"John Doe\" to=\"Alice\">Not much, just chillin. How about you?</message>");
console.log();
validateMessage("<message from=\"Alice\" timestamp=\"1497254112\">Same old, same old</message>");
console.log();
validateMessage("<message to=\"Bob\" from=\"Alice\" timestamp=\"1497254114\">Same old, same old\n" +
    "Let's go out for a beer</message>");
console.log();
validateMessage("<message to=\"Alice\" from=\"Charlie\"><img src=\"fox.jpg\"/></message><meta version=\"2\"/>");
console.log();
validateMessage("<message from=\"Hillary\" to=\"Edward\" secret:true>VGhpcyBpcyBhIHRlc3Q</message>");