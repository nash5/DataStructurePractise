// Time - O(n) 
// space complexity THE BEST solution

function fibo(n) {
    if (n <= 2) return 1;
    let fiboNums = [0, 1, 1];

    for (i = 3; i <= n; i++) {
        fiboNums[i] = fiboNums[i - 1] + fiboNums[i - 2];
    }

    return fiboNums[n];
}

console.log(fibo(100000));