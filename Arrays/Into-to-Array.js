const array = ["a", "b", "c", "d", "e"];

const num = [1, , 2, 3, 4, 5, 7];

const boolean = [true, false];

const mixed = [1, "hello", "undefined", "false", 76, { a: "a" }, ["v"]];

// console.log(mixed);

// creating our own array with custom function

class BuildArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(i) {
    return this.data[i];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    const firstElement = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return firstElement;
  }

  deleteIndex(i) {
    const item = this.data[i];

    for (let j = 0; j < this.length - 1; j++) {
      this.data[j] = this.data[j + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const myNewArray = new BuildArray();

myNewArray.push("tolu");
myNewArray.push("dayo");
myNewArray.push("motunrayo");
myNewArray.push("gay");
// myNewArray.pop();
myNewArray.shift;

console.log(myNewArray);
console.log(myNewArray.deleteIndex(0));
console.log(myNewArray);
