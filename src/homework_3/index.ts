import { DoubleLinkedList } from '../lib/data-structures';

const list = new DoubleLinkedList();

list.add(1);
list.add(2);
list.add(3);

console.log(list?.first?.value); // 1
console.log(list?.last?.value); // 3
console.log(list?.first?.next?.value); // 2
console.log(list?.first?.next?.prev?.value); // 1

for (const value of list) {
  console.log(value);
}
