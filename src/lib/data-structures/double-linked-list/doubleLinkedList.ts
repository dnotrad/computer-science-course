export class DoubleLinkedListNode<T> {
  #value: T;
  next: DoubleLinkedListNode<T> | null;
  prev: DoubleLinkedListNode<T> | null;

  constructor(value: T) {
    this.#value = value;
    this.next = null;
    this.prev = null;
  }

  get value(): T {
    return this.#value;
  }

  toPrimitive() {
    return this.value;
  }
}

export class DoubleLinkedList<T> {
  #first: DoubleLinkedListNode<T> | null = null;
  #last: DoubleLinkedListNode<T> | null = null;

  addLeft(value: T) {
    let node = new DoubleLinkedListNode(value);

    if (this.#first == null) {
      this.#first = node;

      return node;
    }

    let firstNode = this.#first;

    this.#first = node;

    if (this.#last == null) {
      this.#last = firstNode;
      this.#last.prev = this.#first;
      this.#first.next = this.#last;
    } else {
      this.#first.next = firstNode;
    }

    return node;
  }

  addRight(value: T) {
    let node = new DoubleLinkedListNode(value);

    if (this.#first == null) {
      this.#first = node;

      return node;
    }

    if (this.#last == null) {
      node.prev = this.#first;
      this.#last = node;
      this.#first.next = this.#last;

      return node;
    }

    node.prev = this.#last;
    this.#last.next = node;
    this.#last = node;

    return node;
  }

  removeLeft() {
    if (this.#first == null) {
      return;
    }

    if (this.#first.next == null) {
      this.#first = null;
      return;
    }

    if (this.#first.next === this.#last) {
      this.#first = this.#last;
      this.#first.prev = null;
      this.#last = null;
      return;
    }

    this.#first = this.#first.next;
    this.#first.prev = null;
  }

  removeRight() {
    if (this.#last == null) {
      if (this.#first != null) {
        this.#first = null;
      }
      return;
    }

    if (this.#last.prev === this.#first && this.#first != null) {
      this.#first.next = null;
      this.#last = null;
      return;
    }

    this.#last = this.#last.prev;
    this.#last!.next = null;
  }

  *[Symbol.iterator]() {
    let node = this.#first;
    while (node) {
      yield node.value;
      node = node.next;
    }
  }

  get first(): DoubleLinkedListNode<T> | null {
    return this.#first;
  }

  get last(): DoubleLinkedListNode<T> | null {
    return this.#last;
  }
}
