import { describe, test, expect } from 'vitest';
import { waitForCheckIsOne } from './wait-for-check-is-one';

describe('waitForCheckIsOne', () => {
  test('1 x -> false', async () => {
    const target = 2;

    const result = await waitForCheckIsOne(target);

    expect(result).toEqual(false);
  });

  test('1 -> true', async () => {
    const target = 1;

    const result = await waitForCheckIsOne(target);

    expect(result).toEqual(true);
  });
});
