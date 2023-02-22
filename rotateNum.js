let n = 12345;
k = 11;

const rotateNum = (n, k) => {
    count = 0;
    let temp = n;
    while (temp > 0) {
        temp = parseInt(temp / 10);
        count++;
    }
    if (k > count || k < count) {
        k %= count;
    }
    if (k < 0) {
        k = count + k;
    }
    let dnmtr = 1;
    let numntr = 1;
    for (let i = 1; i <= count; i++) {
        if (i <= k) {
            dnmtr *= 10;
        }
        else {
         numntr *= 10;
        }
    }
    let start = parseInt(n / dnmtr);
    let end = n % dnmtr;
    let result = parseInt(end * numntr + start);
    return result;
}

console.log(rotateNum(n, k));