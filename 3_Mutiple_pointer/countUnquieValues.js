// WOP to find unquie values count
// eg: [1, 1, 2, 3, 3, 5] O/P = 4

function countUniqueValue(arr) {
    let i = 0;
    for (j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValue([1,1,1,2,2,3,4,4,5,5,5,5]));

/**
 * [1,1,1,2,2,3,4,4,5,5,5,5]
 * [1,2,2,3,4,4,5,5,5,5]
 * [1,2,3,4,4,5,5,5,5]
 */

/**
 * 
 *  
 * 
 *  
 * 
 */