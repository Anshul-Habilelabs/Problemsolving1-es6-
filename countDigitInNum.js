function countDigit(n) {
    let count = 0;
    while (n>0) {
        n=parseInt(n/10)
        count++
    }
    return count
}

console.log(countDigit(1234));