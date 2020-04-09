function lowestIndex(arr) {

   
    var lowestindex = 0;
    var j = 0;
    var position = [];

    for (i = 0; i < arr.length; i++) {

        if (arr[i] < arr[lowestindex]) {

            smallestvalue = arr[i];
            lowestindex = i;
        }
    }
    for (i = 0; i < arr.length; i++) {

        if (smallestvalue === arr[i]) {
            position[j] = i;
            j++;
        }
    }
    return position;
}

console.log(lowestIndex([2, -3, 5, 18, -3, 9, -3]));
