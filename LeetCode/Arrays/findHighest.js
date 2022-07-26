let a = [10, 19, 15, 12, 19, 4];

// Mutiple pointer

function findHighest(arr) {
    if (arr.length < 0) return [];

    if (arr.length === 0) return arr[0];

    let highest = 0;
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (a[i] < a[j]) {
            highest = a[j];
            i++;
        } else {
            j--;
        }
    }
    return highest;
}

console.log(findHighest(a));