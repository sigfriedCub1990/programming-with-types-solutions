import { contains, print } from "./iterator";

export class BinaryTreeNode<T> implements Iterable<T> {
  value: T;
  left: BinaryTreeNode<T> | undefined;
  right: BinaryTreeNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }

  [Symbol.iterator]() {
    return inOrderIterator(this);
  }
}

// export const printInOrder = <T>(node: BinaryTreeNode<T> | null) => {
//   if (node) {
//     printInOrder(node.left);
//     console.log(node.value);
//     printInOrder(node.right);
//   }
// };

//     4
//    / \
//   2   5
//  / \
// 1   3
const root = new BinaryTreeNode(4);
root.left = new BinaryTreeNode(2);
root.left.right = new BinaryTreeNode(3);
root.left.left = new BinaryTreeNode(1);
root.right = new BinaryTreeNode(5);

// printInOrder(root);

// Iterators "magic"
//

class BinaryTreeNodeIterator<T> implements Iterator<T> {
  private root: BinaryTreeNode<T>;
  private queue: Array<T>;

  constructor(node: BinaryTreeNode<T>) {
    this.root = node;
    this.queue = [];

    this.inOrder(this.root);
  }

  inOrder(node: BinaryTreeNode<T> | undefined) {
    if (node) {
      this.inOrder(node.left);
      this.queue.push(node.value);
      this.inOrder(node.right);
    }
  }

  next() {
    const result = this.queue.shift();

    if (result) {
      return { value: result, done: false };
    }

    return { value: null, done: true as const };
  }
}

function* preOrderIterator<T>(root: BinaryTreeNode<T>): IterableIterator<T> {
  yield root.value;

  if (root.left) {
    for (const value of preOrderIterator(root.left)) {
      yield value;
    }
  }

  if (root.right) {
    for (const value of preOrderIterator(root.right)) {
      yield value;
    }
  }
}

function* inOrderIterator<T>(root: BinaryTreeNode<T>): IterableIterator<T> {
  if (root.left) {
    for (const value of inOrderIterator(root.left)) {
      yield value;
    }
  }

  yield root.value;

  if (root.right) {
    for (const value of inOrderIterator(root.right)) {
      yield value;
    }
  }
}

function* postOrderIterator<T>(root: BinaryTreeNode<T>): IterableIterator<T> {
  if (root.left) {
    for (const value of postOrderIterator(root.left)) {
      yield value;
    }
  }

  if (root.right) {
    for (const value of postOrderIterator(root.right)) {
      yield value;
    }
  }

  yield root.value;
}

// const iterator = new BinaryTreeNodeIterator(root);
// print(iterator);

// console.log("^");
// const newIterator = new BinaryTreeNodeIterator(root);
// console.log(contains(3, newIterator));

// for (const node of root) {
//   console.log(node);
// }
// print(root);
// console.log(contains(3, root));

// console.log("Generator function in-order");
// for (const node of inOrderIterator(root)) {
//   console.log(node);
// }

// console.log();
// console.log("Generator function pre-order");
// for (const node of preOrderIterator(root)) {
//   console.log(node);
// }

// console.log();
// console.log("Generator function post-order");
// for (const node of postOrderIterator(root)) {
//   console.log(node);
// }

// console.log();
// console.log("In order iterating over tree");
// for (const node of root) {
//   console.log(node);
// }
