function isPrime(n){
    if(n<2) return false
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false
        }
    }
}

function getFactor(n){
    for(let i=2;i<n;i++){
        if(isPrime(i)){
        if(i){}
        }
    }
}