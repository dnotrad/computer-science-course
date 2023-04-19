import { DoubleLinkedList } from './doubleLinkedList';

describe('Double Linked List', function () {
  test('Empty list values', () => {
    const linkedList = new DoubleLinkedList();
    expect(linkedList.first).toBe(null);
    expect(linkedList.last).toBe(null);
  });

  test('First and last node', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.addRight(1);
    linkedList.addRight(2);

    expect(linkedList.first?.value).toBe(1);
    expect(linkedList.last?.value).toBe(2);
  });

  test('A long list', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.addRight(1);
    linkedList.addRight(2);
    linkedList.addRight(3);
    linkedList.addRight(4);

    expect(linkedList.first?.next?.next?.next?.value).toBe(4);
    expect(linkedList.last?.value).toBe(4);
  });

  test('Remove right', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.addRight(1);
    linkedList.addRight(2);
    linkedList.removeRight();

    expect(linkedList.last).toBe(null);
  });

  test('Remove left', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.addRight(1);
    linkedList.addRight(2);
    linkedList.removeLeft();

    expect(linkedList.first?.value).toBe(2);
  });

  test('A lot of addRight and delete', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.addRight(1);
    linkedList.addRight(2);
    linkedList.removeLeft();
    linkedList.addRight(3);
    linkedList.addRight(4);
    linkedList.removeRight();
    linkedList.addRight(5);

    expect(linkedList.first?.value).toBe(2);
    expect(linkedList.first?.next?.value).toBe(3);
    expect(linkedList.last?.value).toBe(5);
  });

  test('A lot of addLeft and delete', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.addLeft(1);
    linkedList.addLeft(2);
    linkedList.removeRight();
    linkedList.addLeft(3);
    linkedList.addLeft(4);
    linkedList.removeRight();
    linkedList.addLeft(5);

    expect(linkedList.first?.value).toBe(5);
    expect(linkedList.first?.next?.value).toBe(4);
    expect(linkedList.last?.value).toBe(3);
  });

  test('Nullish last and first by removing left', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.addRight(1);
    linkedList.addRight(2);
    linkedList.removeLeft();
    linkedList.removeLeft();

    expect(linkedList.first).toBe(null);
    expect(linkedList.last).toBe(null);
  });

  test('Nullish last and first by removing right', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.addRight(1);
    linkedList.addRight(2);
    linkedList.removeRight();
    linkedList.removeRight();

    expect(linkedList.first).toBe(null);
    expect(linkedList.last).toBe(null);
  });
});
