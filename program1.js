function smallestMissingPositiveInteger(nums) {

  let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = 0;
        }
    }

    for (let i = 0; i < n; i++) {
        let num = Math.abs(nums[i]);
        if (num !== 0) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] >= 0) {
            return i + 1;
        }
    }

    return n + 1;
}
  module.exports = smallestMissingPositiveInteger;

