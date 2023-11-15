interface ILinkedList<T> {
  append(value: T): void;
  at(index: number): T;
  find(value: T): number;
  getSize(): number;
  isEmpty(): boolean;
}

class Node<T> {
  private value: T | undefined;
  private next: Node<T> | undefined;

  constructor(value?: T) {
    this.value = value;
    this.next = undefined;
  }

  getNext() {
    return this.next;
  }

  setNext(newNext: Node<T>) {
    this.next = newNext;
  }

  getValue() {
    return this.value;
  }
}

class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | undefined;
  private size: number;

  constructor() {
    this.size = 0;
  }

  append(value: T): void {
    if (this.isEmpty()) {
      this.head = new Node(value);
      this.size++;
    } else {
      let lastNode = this.head;
      while (lastNode?.getNext()) {
        lastNode = lastNode.getNext();
      }
      lastNode?.setNext(new Node(value));
      this.size++;
    }
  }

  at(index: number): T {
    if (this.isEmpty()) throw new Error("Can get elements from an empty list");
    let currentIndex = 0;
    if (index === currentIndex) return this.head?.getValue() as T;
    let currentNode = this.head;
    while (currentIndex !== index) {
      currentNode = currentNode?.getNext();
      currentIndex++;
    }

    return currentNode?.getValue() as T;
  }

  find(value: T): number {
    if (this.isEmpty())
      throw new Error("Can find index of element from an empty list");
    let elementIndex = 0;
    let currentNode = this.head;
    do {
      if (currentNode?.getValue() === value) return elementIndex;
      currentNode = currentNode?.getNext();
      elementIndex++;
    } while (currentNode);

    return -1;
  }

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

export { LinkedList };
