import {
  describe,
  test,
  expect,
  vi,
  beforeEach,
  afterEach,
  MockInstance,
} from 'vitest';
import { checkIsOneOrThree } from './check-is-one-or-three';
import * as checkIsThreeModule from './check-is-three';

describe('checkIsOneOrThree', () => {
  let mockCheckIsThree: MockInstance;

  beforeEach(() => {
    mockCheckIsThree = vi.spyOn(checkIsThreeModule, 'checkIsThree');
    mockCheckIsThree.mockImplementation((target: any) => false);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('1 -> true', () => {
    const target = 1;

    const result = checkIsOneOrThree(target);

    expect(result).toEqual(true);
  });

  test('3 -> true', () => {
    mockCheckIsThree.mockReturnValue(true);

    const target = 3;

    const result = checkIsOneOrThree(target);

    expect(result).toEqual(true);
    expect(mockCheckIsThree).toBeCalledWith(target);
    expect(mockCheckIsThree).toBeCalledTimes(1);
  });

  test('not 1 or 3 -> false', () => {
    const target = 2;

    const result = checkIsOneOrThree(target);

    expect(result).toEqual(false);
  });
});
