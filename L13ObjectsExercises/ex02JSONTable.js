function solve(array) {
    let output = "<table>\n";

    for (const element of array) {
        let obj = JSON.parse(element);
        output += "\t<tr>\n";
        output += `\t\t<td>${obj.name}</td>\n`;
        output += `\t\t<td>${obj.position}</td>\n`;
        output += `\t\t<td>${Number(obj.salary)}</td>\n`;
        output += "\t<tr>\n";
    }
    output += "</table>";

    console.log(output);
}

solve(
    [
        '{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}',
    ]
);