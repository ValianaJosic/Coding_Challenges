function arraySum(arr){

    var sum = 0;

    for ( var i=0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

console.log(arraySum([2, 3, -1, 5, 7, 9, 10, 15, 95]))
