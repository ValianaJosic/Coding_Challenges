var text = "Create a function to return the longest word(s) in a sentance.";

console.log(getLongestWords(text));

function getLongestWords(text) {

    var words = getWords(text);

    var maxSize = 0;
    var maxPositions = [];

    for (i = 0; i < words.length; i++) {

        var currWordSize = words[i].length;

        if (currWordSize > maxSize) {

            maxSize = currWordSize;
            maxPositions = [i];

        }

        else if (currWordSize === maxSize) {

            maxPositions.push(i);
        }

    }
    return getElements(words, maxPositions);
}

function getElements(arr, arrPositions) {

    var arrNew = [];

    for (var pos of arrPositions) {

        arrNew.push(arr[pos]);
    }

    return arrNew;

}

function getWords(text) {

    let startWord = -1;
    let arr = [];

    for (i = 0; i <= text.length; i++) {

        let c = i < text.length ? text[i] : " ";

        if (!isSeparator(c) && startWord < 0) {

            startWord = i;

        }

        if (isSeparator(c) && startWord >= 0) {

            let word = text.substring(startWord, i);
            arr.push(word);

            startWord = -1;

        }
    }

    return arr;
}


function isSeparator(c) {

    var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];

    return separators.includes(c);

} 
