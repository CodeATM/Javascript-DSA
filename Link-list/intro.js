// ================== Node =================//
class MyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor(value) {
    const newNode = new MyNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new MyNode(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    if (!this.head) {
      prev = temp;
      temp = prev.next;
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  unshift(value) {
    const newNode = new MyNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;

    this.head = this.head.next;

    temp.next = null;

    this.length--;

    if (this.length == 0) {
      this.tail = null;
    }

    return temp;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let temp = this.head;

    while (temp) {
      if (!temp.next) {
        return temp;
      }

      temp = temp.next;
    }
  }
}

// Create a new linked list and push a value
const myNewList = new MyLinkedList(1);
myNewList.push(2);
// myNewList.push(70);
// myNewList.unshift(30);
// myNewList.shift();

// myNewList.getLast();

console.log(myNewList.getLast());
