function reverseString(s){
    var s2 = "";

    for( var i = s.length - 1; i >= 0; i--){

        var letter = s[i];
        s2 += letter;

    }
    return s2;
}

console.log(reverseString("Hello"));