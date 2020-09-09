var arr = [1, 2, 3];
rotateRight(arr);
console.log(arr);

function rotateRight(arr) {

    var last = arr.pop();
    arr.unshift(last);
}
