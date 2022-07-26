// Write a program to match 2 array values
// eg: [1, 2, 3] [4, 1, 9] = O/P true

// function matchArray(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex !== -1) {
//             arr2.splice(arr2.indexOf(arr1[i] ** 2), 1)
//         } else {
//             return false;
//         }
//     }
//     return true;
// }

function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();

    if (str1.length !== str2.length) {
        return false;
    }

    let counter = {};

    [...str1].forEach(v => {
        counter[v] ? counter[v] += 1 : counter[v] = 1;
    });

    for (i = 0; i < num2.toString().length; i++) {
        if (!counter[num2.toString()[i]]) {
            return false;
        } else {
            counter[num2.toString()[i]] -= 1;
        }
    }

    return true;

}
console.log(sameFrequency(184, 281));