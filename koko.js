var minEatingSpeed = function (piles, h) {
  let maxPile = Math.max(...piles);

  let l = 1,
    r = maxPile;

  let min = maxPile;

  while (l <= r) {
    let k = (l + r) >> 1;

    let hours = piles.reduce((acc, cur) => {
      acc += Math.ceil(cur / k);
      return acc;
    }, 0);
    if (hours <= h) {
      min = Math.min(min, k);
      r = k - 1;
    } else {
      l = k + 1;
    }
  }
  return min;
};
