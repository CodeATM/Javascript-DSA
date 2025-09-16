// Single Linked List

// ================== Node =================//

class MyNode {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor(value) {
    this.head = new MyNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new MyNode(value);
    this.tail.next = newNode; 
    this.tail = newNode;
    this.length++;
  }
}

const myNewList = new MyLinkedList(1);
myNewList.push(10);

console.log(myNewList);
