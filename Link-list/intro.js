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

  get(index) {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      if (counter === index) {
        return temp;
      }

      counter++;

      temp = temp.next;
    }
    return null;
  }

  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    const newNode = new MyNode(value);

    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;

    this.length++;

    return true;
  }

  size() {
    let counter = 0;

    let temp = this.head;

    while (temp) {
      counter++;

      temp = temp.next;
    }

    return counter;
  }

  clear() {
    this.head = null;
  }
}

// Create a new linked list and push a value
const myNewList = new MyLinkedList(1);
myNewList.push(2);
myNewList.push(3);
// myNewList.push(70);
// myNewList.unshift(30);
// myNewList.shift();

// myNewList.getLast();

console.log(myNewList.insert(0, 30));
console.log(myNewList.clear());
