function captureNumbers(stringArray) {
    console.log(stringArray
        .join(" ")
        .match(/[0-9]+/g)
        .join(" "));
}

captureNumbers(["The300", "What is that?", "I think it’s the 3rd movie.", "Lets watch it at 22:45"]);
captureNumbers(["Let’s go11!!!11!", "Okey!1!"]);
