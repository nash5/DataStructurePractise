// Sliding Window
// max sum of a subarray with length of number passed.
// ([100,200,300,400], 2)

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let total = 0;
    for (let i = 0; i < num; i++) {
        total += arr[i];
    }
    let temp = total;
    for (let i = num; i < arr.length; i++) {
        temp += arr[i] - arr[i-num];
        total = Math.max(temp, total);
    }
    return total;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));