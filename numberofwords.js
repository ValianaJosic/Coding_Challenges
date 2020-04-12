function countWords(text) {

    var wasSeparator = true;
    var words = 0;

    for (var c of text) {

        if (isSeparator(c)) {

            wasSeparator = true;
            continue;
        }

        if (wasSeparator) {
            words++;
            wasSeparator = false;

        }
    }
    return words;
}

function isSeparator(c) {

    var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];

    return separators.includes(c);
}

console.log(countWords("Hi, best friend!"));
