
// Find Maximum

function findMax(nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
    }
  }

  return max
}

console.log(findMax([2, 7, 2, 9, 5]))