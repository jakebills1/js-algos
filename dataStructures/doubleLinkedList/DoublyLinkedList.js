class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}
function readListForwards(head) {
  var current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}
function findTail(head) {
  var current = head;
  while (current.next !== null) {
    current = current.next;
  }
  return current;
}
function readListBackwards(tail) {
  var current = tail;
  while (current !== null) {
    console.log(current.data);
    current = current.previous;
  }
}
function initNewListNode(data) {
  var node = new LinkedListNode(data);
  return node;
}
function append(tail, data) {
  tail.next = initNewListNode(data);
  tail.next.previous = tail;
}
var head = initNewListNode("A");
head.next = initNewListNode("B");
head.next.previous = head;
head.next.next = initNewListNode("C");
head.next.next.previous = head.next;

append(findTail(head), "D");
readListForwards(head);
readListBackwards(findTail(head));
