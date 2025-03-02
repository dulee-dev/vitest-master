import { describe, test, expect, beforeEach, vi, afterEach } from 'vitest';
import { checkIs2100 } from './check-is-2100';

describe('checkIs2100', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('2100 x -> false', () => {
    const stdDate = new Date(2000, 1, 1, 13);
    vi.setSystemTime(stdDate);

    const result = checkIs2100();

    expect(result).toEqual(false);
  });

  test('2100 -> true', () => {
    const stdDate = new Date(2100, 1, 1, 13);
    vi.setSystemTime(stdDate);

    const result = checkIs2100();

    expect(result).toEqual(true);
  });
});
