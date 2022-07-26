/**
 * Multiple pointers
 * WOP given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
 * averagePair([1,2,3], 2.5) O/P true
 * averagePair([-1,0,3,4,5,6], 4.1) O/P false
 */

function averagePair(a, b) {
    let startIndex = 0;
    let endIndex = a.length - 1;
    while (startIndex < endIndex) {
        let avg = (a[startIndex] + a[endIndex]) / 2;
        if (avg === b) return true;
        else if (avg < b) startIndex++;
        else endIndex--;
    }
    return false;
}

console.log(averagePair([], 8));