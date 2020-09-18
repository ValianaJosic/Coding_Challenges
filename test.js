function rotLeft(a, d) {
    var j = 0
    var rotatedarr = []
    for (i = d; i < a.length; i++) {

        rotatedarr[j] = a[i]
        j++
    }
    for (i = 0; i < d; i++) {

        rotatedarr[j] = a[i]
        j++
    }
    return rotatedarr
}

console.log(rotLeft([1, 2, 3, 4, 5, 6], 5));
