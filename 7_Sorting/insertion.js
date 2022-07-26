// WAP for insertion sort

function insertionSort(arr) {
    let currenVal;
    for (var i = 1; i < arr.length; i++) {
        currenVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currenVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currenVal;
    }
    return arr;
}

console.log(insertionSort([2, 5, 3, 8, 1, 10]));