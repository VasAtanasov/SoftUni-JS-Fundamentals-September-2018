function matchWords(text) {
    console.log(text.match(/[a-zA-Z0-9_]+/g).join("|"));
}

matchWords('_(Underscores) are also word characters');