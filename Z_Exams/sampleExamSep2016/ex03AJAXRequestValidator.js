function solve(array) {
    const METHOD_REGEX = /^Method: (GET|POST|PUT|DELETE)$/;
    const CREDENTIALS_REGEX = /^Credentials: (Bearer|Basic) ([A-Za-z0-9]+)$/;
    const CONTENT_REGEX = /^Content: ([A-Za-z0-9.]+)$/;
    const HASH_REGEX = /([0-9]+)([A-Za-z]+)/;

    let hashPattern = array.pop();

    for (let i = 0; i < array.length; i += 3) {
        let method = METHOD_REGEX.exec(array[i]);
        let credentials = CREDENTIALS_REGEX.exec(array[i + 1]);
        let content = CONTENT_REGEX.exec(array[i + 2]);

        if (!method || !credentials || !content) {
            console.log("Response-Code:400");
            continue;
        }
        if (credentials[1] === "Basic" && (method[1] === "POST" || method[1] === "PUT" || method[1] === "DELETE")) {
            console.log(`Response-Method:${method[1]}&Code:401`);
            continue;
        }

        let responseSuccessful = false;
        let authorizationToken = credentials[2];
        let match;
        while (match = HASH_REGEX.exec(hashPattern)) {
            let count = Number(match[1]);
            let letter = match[2];
            let letters = authorizationToken.match(new RegExp(letter, "g"));
            if (letters.length === count) {
                console.log(`Response-Method:${method[1]}&Code:200&Header:${authorizationToken}`);
                responseSuccessful = true;
                break;
            }
        }

        if (!responseSuccessful) {
            console.log(`Response-Method:${method[1]}&Code:403`);
        }
    }
}

solve(
    [
        "Method: GET",
        "Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB",
        "Content: users.asd.1782452.278asd",

        "Method: POST",
        "Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas",
        "Content: Johnathan",
        "2q"
    ]
);
console.log();
solve(
    [
        "Method: PUT",
        "Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB",
        "Content: users.asd/1782452$278///**asd123",

        "Method: POST",
        "Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas",
        "Content: Johnathan",

        "Method: DELETE",
        "Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx",
        "Content: This.is.a.sample.content",
        "2e5g"
    ]
);
















