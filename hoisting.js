var b = 1;
function outer() {
    var b = 2
    function inner() {
        var b; // b is undefined
        b++; // b is NaN
        b = 3; // b is 3
        console.log(b); // output "3"
    }
    inner();
}
outer();
