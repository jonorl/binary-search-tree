// Imports

import {Tree} from "./class.mjs"

// Auxiliary functions

export const prettyPrint = (node, prefix = "", isLeft = true) => {
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

export function pushDataToArray(data) {
  traversingArray.push(data);
  return traversingArray;
}

// variable initialisation

const test = new Tree();
export let traversingArray = [];
let counter = 0;
let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let root = test.buildTree(arr);

// testing 

// prettyPrint(root);
// console.log(test.find(root, "324"));
// prettyPrint(root);
// root = test.insert(root, 10);
// root = test.delete(root, 10);
// console.log(test.levelOrder(root, pushDataToArray));
// console.log(traversingArray)
// console.log(test.height(test.find(root, "8")))
// console.log(test.depth(root, test.find(root, "6345")));
// console.log(test.isBalanced(root));
// prettyPrint(root);
// console.log(test.rebalance(root));
// console.log(test.preOrder(root, pushDataToArray));
// console.log(traversingArray)
// traversingArray = [];
// console.log(test.inOrder(root, pushDataToArray));
// console.log(traversingArray)
// traversingArray = [];
// console.log(test.postOrder(root, pushDataToArray));
// console.log(traversingArray)
// traversingArray = [];
prettyPrint(root);

