export function createBitGetter(binaryArray: Uint8Array) {
  function assertValidate(index: number, bitPosition: number, arrayLength: number) {
    if (index > arrayLength - 1) {
      throw new Error('Oops! You are out of range of array!');
    }

    if (bitPosition > 7 || bitPosition < 0) {
      throw new Error('Bit position must be in range [0, 7]');
    }
  }

  return {
    get(index: number, bitPosition: number) {
      assertValidate(index, bitPosition, binaryArray.length);

      return (binaryArray[index] & (0b1 << bitPosition)) === 0 ? 0 : 1;
    },

    set(index: number, bitPosition: number, bit: 0 | 1) {
      assertValidate(index, bitPosition, binaryArray.length);

      let number = binaryArray[index];

      if (bit === 0) {
        number = number & ~(0b1 << bitPosition);
      } else {
        number = number | (0b1 << bitPosition);
      }

      binaryArray[index] = number;
    },
  };
}
