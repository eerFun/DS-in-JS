class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null
  }

  // Worst Case O(n) - Average Case Θ(log(n))
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  // Worst Case O(n) - Average Case Θ(log(n))
  isContains(value) {
    if (value === undefined) return false;
    if (this.root === null) return false;
    let temp = this.root;
    while (temp !== null) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  //----------------------------------------------------
  //            TREE TRAVERSAL ALGORITHMS
  //----------------------------------------------------
  // Breadth First Search - [47, 21, 76, 18, 27, 52, 82]
  BFS() {
    let currentNode = this.root;
    const results = [];
    const queue = [];
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }

  // Depth First Search - Pre Order [47, 21, 18, 27, 76, 52, 82]
  DFSPreOrder() {
    const results = [];
    function traverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }

  // Depth First Search - Post Order [18, 27, 21, 52, 82, 76, 47]
  DFSPostOrder() {
    const results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      results.push(currentNode.value);
    }
    traverse(this.root);
    return results;
  }

  // Depth First Search - In  Order [18, 21, 27, 47, 52, 76, 82]
  DFSInOrder() {
    const results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      results.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }
}

//            47
//      21          76
//
//   18    27    52    82

const myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);
console.log(myTree);
