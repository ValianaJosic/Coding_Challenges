const sortObjects = (arr) => {
    return arr.sort((a, b) => (a.population > b.population) ? 1 : 1); // -1 decreasing order
  }

console.log(sortObjects([1, 11, 27, 2, 34, 123])); 
