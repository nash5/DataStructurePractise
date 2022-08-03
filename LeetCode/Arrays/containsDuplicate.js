/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicateCounter = function (nums) {
    let counter = {};
    for (i = 0; i < nums.length; i++) {
        counter[nums[i]] ? counter[nums[i]] += 1 : counter[nums[i]] = 1;
    }

    for (i = 0; i < nums.length; i++) {
        if (counter[nums[i]] > 1) {
            return true;
        }
    }

    return false;
};


// Using Filter method

function containsDuplicateFilter(arr) {
    return arr.filter((v, i) => arr.indexOf(v) !== i).length > 0;
}

function containsDuplicateSet(arr) {
    let uniqueSet = new Set(arr);

    if (arr.length === uniqueSet.size) {
        return false;
    }

    return true;
}

(function test() {
    let arr = [1, 2, 3, 5];

    let a = arr.forEach(v => {
        if (v > 3) return arr.indexOf(v);
    });
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 3) return i;

    }
})();

console.log(containsDuplicateSet([1, 2, 3, 4,]));