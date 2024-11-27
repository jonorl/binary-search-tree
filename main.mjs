// classes

// Creates a node that's composed of a value and a pointer to its next node.

class Node {
  // Constructor
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// Creates the binary tree class
class Tree {
  // Constructor
  constructor(TreeArray) {
    this.TreeArray = TreeArray;
  }

  // Methods

  // Auxiliary method to sort and deduplicate values
  sortAndDedupe(array) {
    // Fringe case with empty array
    let n = arr.length;
    if (n === 0) return null;

    let uniqueAndSorted = [...new Set(array)].sort(function (a, b) {
      return a * 1 - b * 1;
    });
    uniqueAndSorted = uniqueAndSorted.join(" ").trim().split(" ").map(Number);
    return uniqueAndSorted;
  }

  // Write a function that takes an array of data and turns it into a balanced binary tree
  // full of Node objects appropriately placed
  buildTree(arr) {
    // sort and deduplicate the array using auxiliary method
    arr = this.sortAndDedupe(arr);
    let n = arr.length;

    // Create the root node
    let mid = Math.floor((n - 1) / 2);
    let root = new Node(arr[mid]);

    let q = [{ node: root, range: [0, n - 1] }];
    let frontIndex = 0;

    while (frontIndex < q.length) {
      let front = q[frontIndex];
      let curr = front.node;
      let [s, e] = front.range;
      let index = s + Math.floor((e - s) / 2);

      // If left subtree exists
      if (s < index) {
        let midLeft = s + Math.floor((index - 1 - s) / 2);
        let left = new Node(arr[midLeft]);
        curr.left = left;
        q.push({ node: left, range: [s, index - 1] });
      }

      // If right subtree exists
      if (e > index) {
        let midRight = index + 1 + Math.floor((e - index - 1) / 2);
        let right = new Node(arr[midRight]);
        curr.right = right;
        q.push({ node: right, range: [index + 1, e] });
      }

      frontIndex++;
    }
    return root;
  }
  // Write an insert(value)function that inserts the given value.
  insert(root, data) {
    if (root === null) return new Node(data);

    // Duplicates not allowed
    if (root.data === data) return root;

    if (data < root.data) root.left = this.insert(root.left, data);
    else if (data > root.data) root.right = this.insert(root.right, data);

    return root;
  }

  // Helper method to get the left grandchild of the right child
  getSuccessor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) {
      curr = curr.left;
    }
    return curr;
  }

  // Write a deleteItem(value)function that deletes the given value.
  delete(root, data) {
    // Base case
    if (root === null) {
      return root;
    }

    // If key to be searched is in a subtree
    if (root.data > data) {
      root.left = this.delete(root.left, data);
    } else if (root.data < data) {
      root.right = this.delete(root.right, data);
    } else {
      // If root matches with the given key

      // Cases when root has 0 children or
      // only right child
      if (root.left === null) return root.right;

      // When root has only left child
      if (root.right === null) return root.left;

      // When both children are present
      let succ = this.getSuccessor(root);
      root.data = succ.data;
      root.right = this.delete(root.right, succ.data);
    }
    return root;
  }
  // Write a find(value) function that returns the node with the given value.
  find(root, data) {
    if (root === null) return "Tree is empty";

    if (root.data == data) return root;

    if (data < root.data) return this.find(root.left, data);
    else if (data > root.data) return this.find(root.right, data);

    return root;
  }
  // Write a levelOrder(callback) function that accepts a callback function as its parameter.
  // levelOrder should traverse the tree in breadth-first level order and call the callback
  // on each node as it traverses, passing the whole node as an argument, similarly to how
  // Array.prototype.forEach might work for arrays.
  levelOrder(root, callback) {
    if (root === null) return "Tree is empty";
    let queue = [root];
    while (queue.length !== 0) {
      callback(queue[0].data);
      if (queue[0].left !== null) {
        queue.push(queue[0].left);
      }
      if (queue[0].right !== null) {
        queue.push(queue[0].right);
      }
      queue.shift();
    }
    return;
  }

  // Write inOrder(callback), preOrder(callback), and postOrder(callback) functions that also
  // accept a callback as a parameter. Each of these functions should traverse the tree in their
  // respective depth-first order and pass each node to the provided callback. The functions
  // should throw an Error if no callback is given as an argument, like with levelOrder.
  inOrder(callback) {}
  preOrder(callback) {}
  postOrder(callbal) {}
  // Write a height(node) function that returns the given node’s height. Height is defined as
  // the number of edges in the longest path from a given node to a leaf node.
  height(node) {}
  // Write a depth(node) function that returns the given node’s depth. Depth is defined as
  // the number of edges in the path from a given node to the tree’s root node.
  depth(node) {}
  // Write an isBalanced function that checks if the tree is balanced. A balanced tree
  // is one where the difference between heights of the left subtree and the right subtree of
  // every node is not more than 1.
  isBalanced() {}
  // Write a rebalance function that rebalances an unbalanced tree.
  rebalance() {}
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

function sth(data) {
  traversingArray.push(data);
  console.log("array");
  console.log(traversingArray);
  return traversingArray;
}

const test = new Tree();
let traversingArray = [];

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let root = test.buildTree(arr);
// prettyPrint(root);
console.log(test.find(root, "6345"));
// prettyPrint(root);
root = test.insert(root, 10);
root = test.delete(root, 10);
console.log(test.levelOrder(root, sth));

prettyPrint(root);
