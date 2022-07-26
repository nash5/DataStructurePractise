/**
input - [1,2,3,4,5] 
O/P - [1, 3, 6, 10, 15]
 */

/**
 * @param {number[]} arr
 * @return {number[]} 
 */

function sumArray(arr) {

    let maxSum = arr[0];
    let tempSum = 0;

    tempSum = maxSum;
    let newArr = [];

    for (let i = 1; i < arr.length; i++) {
        tempSum =  maxSum + arr[i - 1] + arr[i];
        newArr.push(tempSum);
    }

    return newArr;
}

console.log(sumArray([1, 2, 3, 4]));

/**
[1,2,3,4]
i = 0;
max = arr[0];
val = max + arr[i-max[i]]   
 */
