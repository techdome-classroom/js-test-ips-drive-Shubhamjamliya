function smallestMissingPositiveInteger(nums) {

  let n = nums.length;

    // Mark non-positive numbers and numbers greater than n as 0
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = 0;
        }
    }

    // Use index as a hash key and number sign as a presence detector
    for (let i = 0; i < n; i++) {
        let num = Math.abs(nums[i]);
        if (num !== 0) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }

    // Find the first positive element
    for (let i = 0; i < n; i++) {
        if (nums[i] >= 0) {
            return i + 1;
        }
    }

    return n + 1;
}

console.log(smallestMissingPositiveInteger([-1, -3, 4, 2])); // Output: 1
  module.exports = smallestMissingPositiveInteger;

