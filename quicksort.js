//INCOMPLETE
import Sort from "./sort.js";
export default class QuickSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];
    if (array.length <= 1) {
      return array;
    }
    const leftArray = [];

    const rightArray = [];

    const pivotElement = array.shift();
    const centerArray = [pivotElement];

    while (array.length) {
      const currentElement = array.shift();
      this.callbacks.visitingCallback(currentElement);

      if (this.comparator.equal(currentElement, pivotElement)) {
        leftArray.push(currentElement);
      } else {
        rightArray.push(currentElement);
      }
    }
    const leftArraySorted = this.sort(leftArray);
    const rightArraySorted = this.sort(rightArray);
    return leftArraySorted.concat(centerArray, rightArraySorted);
  }
}
let sorting = new QuickSort();

console.log(sorting.sort([2, 5, 4, 3, 1]));
