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
      while(true) {
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
  }
  
  const myTree = new BST();
  myTree.insert(47);
  myTree.insert(21);
  myTree.insert(76);
  myTree.insert(18);
  myTree.insert(27);
  myTree.insert(52);
  myTree.insert(82);
  console.log(myTree);