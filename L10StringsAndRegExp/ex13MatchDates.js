function dateMatcher(array) {
    const REGEX = /\b([0-9]{1,2})-([A-Z][a-z][a-z])-([0-9]{4})\b/g;
    for (let i = 0; i < array.length; i++) {
        let match = REGEX.exec(array[i]);
        if (match) {
            console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`)
        }
    }
}


dateMatcher(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.']);