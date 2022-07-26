/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (arr) {
    if (arr.length <= 1) return arr[0];

    let counter = {}

    arr.forEach((v) => {
        counter[v] ? counter[v] += 1 : counter[v] = 1;
    });

    for (let key in counter) {
        if (counter[key] === 1) {
            return key;
        }
    }

}

console.log(singleNumber([2, 2, 1]));