function getTemplate(array) {
    let html = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    html += "<quiz>\n";
    for (let i = 0; i < array.length; i += 2) {
        let question = array[i];
        let answer = array[i + 1]

        html += "\t<question>\n";
        html += "\t\t" + question + "\n";
        html += "\t</question>\n";
        html += "\t<answer>\n";
        html += "\t\t" + answer + "\n";
        html += "\t</answer>\n";
    }
    html += "</quiz>\n";
    console.log(html);
}

getTemplate(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);
getTemplate(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);