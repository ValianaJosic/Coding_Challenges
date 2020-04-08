var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var arr = mergeArray(arr1, arr2);
console.log(arr);

function mergeArray(arr1, arr2){

    var arr = [];

    for(let value of arr1){
        arr.push(value);
    }

    for(let value of arr2){

        arr.push(value);
    }
    return arr;
}