/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 */

var twoSum = function (nums, target) {
    if (nums.length === 0) return [];

    if (nums.length === 1 && nums[0] === target) return [0];

    let start = 0;
    let end = nums.length - 1;

    let sortArr = [...nums].sort((a, b) => a - b);
    while (start < end) {
        let sum = sortArr[start] + sortArr[end];

        if (sum === target) return [nums.indexOf(sortArr[start]), nums.indexOf(sortArr[end])];

        sum > target ? end-- : start++;
    }

    return [];
};

console.log(twoSum([3,2,3],6));