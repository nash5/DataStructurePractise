// Binary seach works on only sorted arrays.
// WAP to find index of an array 
// eg: [1,2,3,6,8,10,14,26,30], 10 -> O/P 5

function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== elem && start <= end) {
        if (arr[middle] < elem) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 6, 8, 10, 14, 26, 30], 320));