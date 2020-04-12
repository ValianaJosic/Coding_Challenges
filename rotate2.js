function rotLeft(a, d) {
    let len = 0,j=0
    var b =[]
    len = a.length
    for (let i = d; i < len; i++){
        b[j] = a[i]
        j++
    }
    for (let i = 0; i < d; i++){
        b[j] = a[i]
        j++
    }
    return b
}

console.log(rotLeft([1, 2, 3], 2));
