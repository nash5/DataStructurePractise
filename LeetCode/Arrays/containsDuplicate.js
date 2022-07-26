/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
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

// console.log(validAnagram('cinema', 'iceman'));

console.log(containsDuplicate([1, 2, 3, 4, 1, 1]));

// Using Filter method

function duplicateArray(arr) {
    return arr.filter((v, i) => arr.indexOf(v) !== i).length > 0;
}