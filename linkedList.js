class node {
  constructor(val) {
    (this.value = val), (this.next = null);
  }
}
const a = new node("A");
const b = new node("B");
const c = new node("C");
const d = new node("D");

a.next = b;
b.next = c;
c.next = d;
let current;
const arr = [];
function traverse(a) {
  if (a == null) return false;

  console.log(a.value);

  traverse(a.next);
  arr.push(a.value);
  return arr;
}
console.log(traverse(a));
