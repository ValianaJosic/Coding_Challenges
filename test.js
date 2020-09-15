var s = reverseString("Javascript");
console.log(s);

function reverseString(s){

    var s2 = "";

    for( var i= s.length -1; i >= 0; i--){

        var char= s[i];
        s2 += char;
    }
    return s2;
}
