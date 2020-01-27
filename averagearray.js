function averageArray(arr){
	
  var sum = 0;
  var n = arr.length;

  for ( var i=0; i< arr.length; i++){
    sum += arr[i];
  }
     return sum / n;

  };

  console.log(averageArray([1,3,9,15,9]))