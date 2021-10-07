class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  
  // O(1)
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // O(n)
  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  // O(1)
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //O(1)
  shift() {
    if (!this.head) return undefined;
    const firstNode = this.head;
    this.head = this.head.next;
    firstNode.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return firstNode;
  }

  // O(n)
  get(index) {
    if (typeof index !== 'number') throw new Error(`Invalid input: The 'index' should be a number`);
    if (index < 0 || index >= this.length) return undefined;

    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }
  
  // O(n)
  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    } else {
      return false;
    }
  }

  // O(n)
  insert(index, value) {
    if (typeof index !== 'number') throw new Error(`Invalid input: The 'index' should be a number`);
    if (index < 0 || index > this.length) return false;
    
    if (index === 0) {
      this.unshift(value);
      return true;
    } else if (index === this.length) {
      this.push(value);
      return true;
    }
    
    const newNode = new Node(value);
    const preInsertNode = this.get(index - 1);
    newNode.next = preInsertNode.next;
    preInsertNode.next = newNode;
    this.length++;
    return true;
  }
  
  // O(n)
  remove(index) {
    if (typeof index !== 'number') throw new Error(`Invalid input: The 'index' should be a number`);
    if (index < 0 || index >= this.length) return undefined;
    
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    
    const preRemoveNode = this.get(index - 1);
    const removeNode = preRemoveNode.next;
    preRemoveNode.next = removeNode.next;
    removeNode.next = null;
    this.length--;
    return removeNode;
  }

  // O(n)
  reverse() {
    // swap head and tail
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    // iterate from the beginning node to the end one
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(1);
// myLinkedList.push(2).push(3);
console.log(myLinkedList);
