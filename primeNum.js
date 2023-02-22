
function isPrime(n){
    if(n<2) return false

    for(let i=2;i<n;i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

function printPrime(a,b){
    for(let i=a;i<b;i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

printPrime(1,10)