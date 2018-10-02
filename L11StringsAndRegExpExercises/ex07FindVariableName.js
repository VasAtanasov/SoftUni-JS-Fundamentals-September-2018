function findNames(text) {
    const REGEX = /\b_([A-Za-z0-9]+)\b/g;
    console.log(text.match(REGEX)
        .map(word => word.substring(1))
        .join(","));
}

findNames("The _id and _age variables are both integers.");
findNames("Calculate the _area of the _perfectRectangle object.");
findNames("__invalidVariable _evenMoreInvalidVariable_ _validVariable");