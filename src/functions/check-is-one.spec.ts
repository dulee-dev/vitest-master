import { describe, test, expect } from 'vitest';
import { checkIsOne } from './check-is-one';

describe('checkIsOne', () => {
  test('not 1 -> false', () => {
    const target = 2;

    const result = checkIsOne(target);

    expect(result).toEqual(false);
  });

  test('1 -> true', () => {
    const target = 1;

    const result = checkIsOne(target);

    expect(result).toEqual(true);
  });
});
