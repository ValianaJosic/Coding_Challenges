function maxNumber(arr){

    var max= arr[0];

    for( var i=0; i < arr.length; i++){

        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxNumber([4,12,34,69,2,-4]));
