import { createBitGetter } from './createBitGetter';

describe('BitGetter', function () {
  test('Can get bit value', () => {
    const bitter = createBitGetter(new Uint8Array([0b1111, 0b0100]));
    expect(bitter.get(0, 1)).toBe(1);
    expect(bitter.get(1, 1)).toBe(0);
    expect(bitter.get(1, 2)).toBe(1);
  });

  test('Throw error when access out of range', () => {
    const bitter = createBitGetter(new Uint8Array([0b1110, 0b1101]));
    expect(() => bitter.get(2, 1)).toThrow('Oops! You are out of range of array!');
    expect(() => bitter.get(0, 8)).toThrow('Bit position must be in range [0, 7]');
  });

  test('Can set bit value', () => {
    const bitter = createBitGetter(new Uint8Array([0b1110, 0b1101]));
    expect(bitter.get(0, 1)).toBe(1);
    bitter.set(0, 1, 0);
    expect(bitter.get(0, 1)).toBe(0);
    expect(bitter.get(1, 1)).toBe(0);
    bitter.set(1, 1, 1);
    expect(bitter.get(1, 1)).toBe(1);
  });
});
