var arr1 = [1, 2, 3, 10, 5, 3, 14];
var arr2 = [1, 4, 5, 6, 14];

var arr = mergeExclusive(arr1, arr2);
console.log(arr);

function mergeExclusive(arr1, arr2) {

    var arr = [];

    for (var value of arr1) {

        if (!arr2.includes(value)) {
            arr.push(value);
        }
    }

    for (var value of arr2) {

        if (!arr1.includes(value)) {
            arr.push(value);
        }
    }

    return arr;
}