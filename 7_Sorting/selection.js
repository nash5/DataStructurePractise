// WAP to selection sort.

function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let lowest = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        let temp = arr[lowest];
        arr[lowest] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// With Optimisation

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            let temp = arr[lowest];
            arr[lowest] = arr[i]; 
            arr[i] = temp; 
        }
    }
}

console.log(selectionSort([2, 5, 3, 6]));