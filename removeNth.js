var removeNthFromEnd = function (head, n) {
  if (head === null || n === 0) return head;
  if (n === 1 && head.next === null) return null;
  const beforeHead = { next: head };

  let slowPointer = beforeHead;
  let fastPointer = beforeHead;

  let count = -1;
  while (count < n) {
    fastPointer = fastPointer.next;
    count++;
  }

  while (fastPointer) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }
  slowPointer.next = slowPointer.next.next;

  return beforeHead.next;
};
