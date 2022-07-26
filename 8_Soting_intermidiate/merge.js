// WAP to merge sort
// [1, 4, 3] [7, 6, 5] -> O/P = [1,3,4,5,6,7]
// Pseudo code -> slip the arrays to single array and compare both array values and merge.

// merge will happen onli if it is sorted
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            console.log(i, j, arr1[i], arr2[j], result);

            i++;
        } else {
            result.push(arr2[j]);
            console.log(i, j, arr1[i], arr2[j], result);

            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++;
    }

    return result;
}

function mergeSort(arr) {
    let middle = Math.floor(arr.length / 2);

    if (arr.length <= 1) return arr;

    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle))

    return merge(left, right);

}

console.log(mergeSort([1, 3, 2, 5, 7, 4, 5]));

// Big O -> time = O(nlog n) space = log(n)