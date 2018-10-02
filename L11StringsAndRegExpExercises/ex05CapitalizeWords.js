function capitalize(text) {
    console.log(text.toLowerCase()
        .split(/\s+/)
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(" "));
}

capitalize("Capitalize these words");
capitalize("Was that Easy? tRY thIs onE for SiZe!");