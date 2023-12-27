export class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }

  [Symbol.iterator]() {
    return linkedListIterator(this);
  }
}

// const printLinkedList = <T>(node: LinkedListNode<T> | null) => {
//   if (!node) return;

//   while (node) {
//     console.log(node.value);
//     node = node.next;
//   }
// };

const head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);
head.next.next.next = new LinkedListNode(4);

// printLinkedList(first);

class LinkedListIterator<T> implements Iterator<T> {
  private head: LinkedListNode<T>;
  private current: LinkedListNode<T> | undefined;

  constructor(head: LinkedListNode<T>) {
    this.head = head;
    this.current = head;
  }

  next() {
    if (!this.current) {
      return { done: true, value: this.head.value };
    }

    const result = this.current.value;
    this.current = this.current.next;
    return { done: false, value: result };
  }
}

function* linkedListIterator<T>(head: LinkedListNode<T> | undefined) {
  while (head) {
    yield head.value;
    head = head.next;
  }
}

// const iterator = new LinkedListIterator(head);

// print(iterator);
// for (const v of head) {
//   console.log(v);
// }
