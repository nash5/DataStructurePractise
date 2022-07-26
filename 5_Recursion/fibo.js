// Fibo -> 0,1,1,2,3,5,8,13
function fibo(n) {
    if (n <= 2) return 1;
    
    return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(4));