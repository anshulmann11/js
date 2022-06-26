function match(matrix, target) {
  let mid = Math.floor(matrix.length / 2);

  let arr = matrix[Math.floor(matrix.length / 2)];

  if (arr[0] > target) {
    return match([...matrix.slice(0, mid)], target);
  } else if (arr[arr.length - 1] < target) {
    return match([...matrix.slice(mid)], target);
  } else return search(arr, target);
}

function search(nums, target) {
  //let nums = nums1[0];
  if (nums.length === 0) return false;
  if (nums.length === 1 && nums[0] === target) return true;
  if (nums.length === 1 && nums[0] !== target) return false;
  let half = Math.floor(nums.length / 2);
  if (nums[half] == target) return true;
  if (nums[half] < target) {
    return search([...nums.slice(half)], target);
  } else if (nums[half] > target) {
    return search([...nums.slice(0, half)], target);
  }
}
