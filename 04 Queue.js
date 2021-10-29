class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// FIFO - use LinkedLists for better performance because Arrays give us O(n) anyway.
class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode; // Similar to this.head
    this.last = newNode; // Similar to this.tail
    this.length = 1;
  }

  // O(1) - Similar to push() method in LinkedLists
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // O(1) - Similar to shift() method in LinkedLists
  dequeue() {
    if (this.length === 0) return undefined;
    const temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

const myQueue = new Queue(1);
myQueue.enqueue(2);
console.log(myQueue)
