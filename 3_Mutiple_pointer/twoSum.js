var twoSum = function (nums, target) {
    if (nums.length === 1 && nums[0] === target) return [0];

    if (nums.length === 2 && nums[0] + nums[1] === target) return [0, 1];

    nums = nums.sort();
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        if (nums[i] + nums[j] === target) {
            return [i, j];
        } else if (nums[i] + nums[j] > target) {
            j--;
        } else i++;
    }

    return [];
};

console.log(twoSum([3, 2, 4], 6));