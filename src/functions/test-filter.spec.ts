import { describe, test } from 'vitest';

describe('suite 1', () => {
  test.only('2', () => {});

  test.skip('1', () => {});
  test.todo('3', () => {});

  test.skipIf(false)('4', () => {});
});

test('5', () => {});
