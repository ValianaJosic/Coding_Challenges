function lowestIndex(array) {

  var lowestIndex = 0;
  var j = 0;
  var position = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] < array[lowestIndex]) {

      smallervalue = array[i];
      lowestIndex = i;

    }
  }

  for (i = 0; i < array.length; i++) {
    if (smallervalue === array[i]) {
      position[j] = i;
      j++;
    }
  }

  return position;

}

console.log(lowestIndex([-1, -7, 1, 5, -7, 0, 3, -7, 0])); 
