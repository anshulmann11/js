const canSum = (target, nums, memo = {}) => {
  if (target in memo) return memo[targetSum];
  let newarr = [];
  if (target === 0) return true;
  if (target <= 0) return false;
  let remainder = 0;
  for (let num of nums) {
    remainder = target - num;
    // if (remainder === 0) return true;
    if (canSum(remainder, nums) == true) {
      newarr.push(num);
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
};

console.log(canSum(56, [3, 4, 5, 7]));
