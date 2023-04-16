import { DoubleLinkedList } from './doubleLinkedList';

describe('Double Linked List', function () {
  test('Empty list values', () => {
    const linkedList = new DoubleLinkedList();
    expect(linkedList.first).toBe(null);
    expect(linkedList.last).toBe(null);
  });

  test('First and last node', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.add(1);
    linkedList.add(2);

    expect(linkedList.first?.value).toBe(1);
    expect(linkedList.last?.value).toBe(2);
  });

  test('A long list', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);

    expect(linkedList.first?.next?.next?.next?.value).toBe(4);
    expect(linkedList.last?.value).toBe(4);
  });
});
