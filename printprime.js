function printPrimes(nPrimes){
        var n = 0;
        var i = 2;

        while(n < nPrimes){

            if(isPrime(i)){
                console.log(n, " --> ", i);
                n++
            }
            i++;
        }
}

function isPrime(n){
    if(n < 2)
        return false;

    if(n == 2) 
    return true;
    
    var maxDiv = Math.sqrt(n);

    for(var i=2; i <= maxDiv; i++){

        if ( n % i == 0){
            return false;
        }
    }
    return true;
    
}

console.log(printPrimes(100))
