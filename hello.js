var head;
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function traverseList(head) {
  let length = 0;
  while (head != null) {
    length += 1;

    head = head.next;
  }
  return length;
}

function reorderlist(head) {
  let prev = null;
  let next = null;
  let listlen = traverseList(head);
  let newLength = 0;
  while (head != null) {
    console.log(head);
    newLength++;
    console.log(listlen / 2);
    if (newLength >= 1 + listlen / 2) {
      console.log(head);
      next = head.next;
      head.next = prev;
      prev = head;
    }

    head = head.next;
  }
}
//letlistlen = traverseList(head);
head = new Node(85);
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20);
let listlen = console.log(traverseList(head));

console.log(reorderlist(head));
