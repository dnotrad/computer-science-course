// TODO: разобраться с типами геттеров / убрать их?

export class DoubleLinkedListNode {
  #value: unknown;
  #next: DoubleLinkedListNode | null;
  #prev: DoubleLinkedListNode | null;

  constructor(value: unknown) {
    this.#value = value;
    this.#next = null;
    this.#prev = null;
  }

  get value(): unknown {
    return this.#value;
  }

  // @ts-ignore FIX IT LATER?
  get next(): DoubleLinkedListNode | null {
    return this.#next;
  }

  set next(nextNode: DoubleLinkedListNode) {
    this.#next = nextNode;
  }

  // @ts-ignore FIX IT LATER?
  get prev(): DoubleLinkedListNode | null {
    return this.#prev;
  }

  set prev(prevNode: DoubleLinkedListNode) {
    this.#prev = prevNode;
  }
}

export class DoubleLinkedList {
  #first: DoubleLinkedListNode | null = null;
  #last: DoubleLinkedListNode | null = null;

  add(value: unknown) {
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

  *[Symbol.iterator]() {
    let node = this.#first;
    while (node) {
      yield node.value;
      node = node.next;
    }
  }

  get first(): DoubleLinkedListNode | null {
    return this.#first;
  }

  get last(): DoubleLinkedListNode | null {
    return this.#last;
  }
}
