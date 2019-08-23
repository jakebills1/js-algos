class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
var head = new LinkedListNode(2);
head.next = new LinkedListNode(3);
head.next.next = new LinkedListNode(4);
function readList(node) {
  var cursor = node;
  while (cursor !== null) {
    console.log(cursor.data);
    cursor = cursor.next;
  }
}
readList(head);
function insertAtEnd(node, data) {
  let cursor = node;
  while (cursor.next !== null) {
    cursor = cursor.next;
  }
  cursor.next = new LinkedListNode(data);
}
insertAtEnd(head, 5);
readList(head);
function deleteNode(head, value) {
  let cursor = head;
  let previousNode;
  while (cursor.data !== value) {
    previousNode = cursor;
    cursor = cursor.next;
  }
  previousNode.next = cursor.next;
}
deleteNode(head, 5);
readList(head);
