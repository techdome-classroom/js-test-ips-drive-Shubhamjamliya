function smallestMissingPositiveInteger(nums) {


    let n = nums.length;
    
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = 1;
        }
    }
    
    for (let i = 0; i < n; i++) {
        let num = Math.abs(nums[i]);
        if (num === n) {
            nums[0] = -Math.abs(nums[0]);
        } else {
            nums[num] = -Math.abs(nums[num]);
        }
    }
    
    for (let i = 1; i < n; i++) {
        if (nums[i] > 0) {
            return i;
        }
    }
    
    if (nums[0] > 0) {
        return n;
    }

    return n + 1;
}

console.log(smallestMissingPositiveInteger([3, 4, -1, 1])); // Output: 2
console.log(smallestMissingPositiveInteger([1, 2, 0])); // Output: 3
console.log(smallestMissingPositiveInteger([-1, -3, 4, 2])); // Output: 1
  
  module.exports = smallestMissingPositiveInteger;

