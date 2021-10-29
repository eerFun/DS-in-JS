class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LIFO - Similar to LinkedLists that we use left side of or completely the same as Arrays in terms of usability
class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode; // Similar to this.head
    this.length = 1;
  }

  // O(1) - Similar to unshift() method in LinkedLists
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  // O(1) - Similar to shift() method in LinkedLists
  pop() {
    if (this.length === 0) return undefined;
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

const myStack = new Stack(11);
myStack.push(5)
console.log(myStack);
