function matchWebsites(stringArray) {
    let regex = /www\.[A-Za-z0-9][A-Za-z0-9-]*(\.[a-z]+)+/g;
    let match = stringArray.join(" ").match(regex);
    if (match !== null) {
        console.log(match.join("\n"));
    }
}

matchWebsites(["Join WebStars now for free, at www.web-stars.com",
    "You can also support our partners:",
    "Internet - www.internet.com",
    "WebSpiders - www.webspiders101.com",
    "Sentinel - www.sentinel.-ko "]);