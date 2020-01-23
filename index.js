function lowestIndex(array) {
	
  var lowestIndex = 0, 
  i;

    for (i = 1; i < array.length; i++) {
        if (array[i] <= array[lowestIndex]) {
          
          lowestIndex = [i];
          
        }
    }
    
   return lowestIndex;
	
}
	
console.log(lowestIndex([-1, -7, 1, 5, -7, 0])); 
