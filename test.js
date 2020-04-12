function lowestIndex(arr){

var lowestIndex = 0;
var position= [];
var j = 0;

for(i=0; i < arr.length; i++){

    if(arr[i] <= arr[lowestIndex]){

        smallerValue = arr[i];
        lowestIndex = i;
    }
}

for(i=0; i < arr.length; i++){

    if(smallerValue === arr[i]){

        position[j] = i;
        j++;
    }
} 

return position;

}

console.log(lowestIndex([ 1, 2, 3, 1, -7, 4, -7 ]));
