// figure out Big O of each functions
// With loops
function addTillNum1(n) {
    let value = 0;
    for (let i = 0; i <= n; i++) {
        value += i;
    }
    return value;
}

let t1 = performance.now();
addTillNum1(1000000000);
let t2 = performance.now();

console.log('Time taken: ', (t2 - t1)/1000, 'seconds');

//Without loops

function addTillNum2(n) {
    return n * (n + 1) / 2;
}

let time_1 = performance.now();
addTillNum1(1000000000);
let time_2 = performance.now();

console.log('Time taken: ', (time_2 - time_1)/1000, 'seconds');

/**
 * Big  O Notation types for Time ans Space complexity.
 * O(1)
 * O(n)
 * O(n^2)
 * O(log n)
 * O(nlog n)
 * */ 