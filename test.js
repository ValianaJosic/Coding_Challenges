var text = 'apple';
console.log(text)

function logIt() {
  console.log(text);
  var text = 'orange';


};
logIt();

console.log(text)