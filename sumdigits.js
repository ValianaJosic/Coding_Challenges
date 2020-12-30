function sumDigits(n){

    var s = n.toString();
    var sum = 0;

    for(var char of s){

        var digit = parseInt(char);
        sum += digit;
    }
    return sum;
}

console.log( "Sum :", sumDigits(1235231))
