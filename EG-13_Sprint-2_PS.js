

// Sum Array Elements


function sumArray(nums) {

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum

}

console.log(sumArray([10, 20, 30, 40]))