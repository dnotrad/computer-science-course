import { DoubleLinkedList } from '../lib/data-structures';

const linkedList = new DoubleLinkedList<number>();

linkedList.addLeft(1);
linkedList.addLeft(2);
linkedList.removeRight();
linkedList.addLeft(3);
linkedList.addLeft(4);

for (const value of linkedList) {
  console.log(value);
}
