var arr = [1,2,3];
var arr2 = reverseArray(arr);
console.log(arr2);

function reverseArray(arr){

    var arr2 = [];

    for(var i= arr.length - 1; i >= 0; i--){
        arr2.push(arr[i]);
    }
    
    return arr2;
}




