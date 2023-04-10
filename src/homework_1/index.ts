import { createBitGetter } from '../lib/bit-getter';

const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101, 0b1111]));

console.log(bitGetter.get(0, 1)); // 1
console.log(bitGetter.get(1, 1)); // 0
console.log(bitGetter.get(2, 0)); // 1

bitGetter.set(1, 0, 0);
console.log(bitGetter.get(1, 0)); // 0
