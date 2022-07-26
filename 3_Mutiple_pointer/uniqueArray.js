// WAP to find the unique value in an array
// eg: [1, 2, 4, 5, 6, 4, 2] => [1, 2, 4, 5, 6]

// function uniqueArray(arr){
//     let a = [...new Set(arr)]
// }

function uniqueArray(arr) {
    arr = arr.sort();
    let i = 0;
    for(j = 1; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
            arr.splice(arr[j], 1)
            j--;
        } else {
            i++;
        }
    }
    return arr;

}

console.log(uniqueArray([1, 1, 2, 2, 3, 4, 5, 5, 5, 5]));