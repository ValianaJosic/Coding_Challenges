function getPositives(ar){

  var arrpositive = [];

  for(var i=0;i <ar.length;i++){

    var pos = ar[i];

    if (pos >= 0){
      arrpositive.push(pos);
    }
  }
  
  return arrpositive
}

console.log(getPositives([-5, 10, -1, 0, 4, 77,-10]));