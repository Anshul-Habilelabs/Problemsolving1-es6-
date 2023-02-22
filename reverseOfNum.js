function  reverse(n){

    let m=0;
    while(n>0){
      m=(m*10)+(n%10)
      n=parseInt(n/10)
    }
    return m
}

console.log(reverse(12345));