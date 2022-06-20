import Sort from "./sort.js";
export default class BubbleSort extends Sort {
  sort(originalArray) {
    let swapped = false;
    const array = [...originalArray];
    for (let i = 1; i < array.length; i += 1) {
      swapped = false;
      this.callbacks.visitingCallback(array[i]);

      for (let j = 0; j < array.length - 1; j += 1) {
        this.callbacks.visitingCallback(array[j]);

        if (this.comparator.lessThan(array[j + 1], array[j])) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }
      if (!swapped) {
        return array;
      }
    }
    return array;
  }
}
let sorting = new BubbleSort();
console.log(sorting.sort([3, 2, 4, 9, 87, 57, 34, 23, 45]));
