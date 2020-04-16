function lowestIndex(arr) {

    var lowestIndex = 0;
    var j = 0;
    var positions = [];

    for (i = 0; i < arr.length; i++) {

        if (arr[i] <= arr[lowestIndex]) {

            smallestValue = arr[i];
            lowestIndex = i;
        }
    }

    for (i = 0; i < arr.length; i++) {

        if (smallestValue === arr[i]) {

            positions[j] = i;
            j++;
        }
    }

    return positions;
}

console.log(lowestIndex([1, 4, -6, 7, 0, -6]));
