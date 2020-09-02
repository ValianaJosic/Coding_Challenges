var arr = [1, 2, 3];
rotateLeft(arr);
console.log(arr);

function rotateLeft(arr){

    var first = arr.shift();
    arr.push(first);

}
  