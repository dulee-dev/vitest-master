import {
  describe,
  test,
  expect,
  beforeEach,
  vi,
  MockInstance,
  afterEach,
} from 'vitest';
import { checkIsOneOrThree } from './check-is-one-or-three';
import * as checkIsThreeModule from './check-is-three';

describe('checkIsOneOrThree', () => {
  let checkIsThreeMock: MockInstance;

  beforeEach(() => {
    checkIsThreeMock = vi.spyOn(checkIsThreeModule, 'checkIsThree');
    checkIsThreeMock.mockImplementation(() => true);
  });

  afterEach(() => {
    checkIsThreeMock.mockRestore();
  });

  test('1 -> true', () => {
    const target = 1;

    const result = checkIsOneOrThree(target);

    expect(result).toEqual(true);
  });

  test('3 -> true', () => {
    const target = 3;

    const result = checkIsOneOrThree(target);

    expect(result).toEqual(true);
    expect(checkIsThreeMock).toBeCalledWith(target);
    expect(checkIsThreeMock).toBeCalledTimes(1);
  });

  test('1 or 3 x -> false', () => {
    checkIsThreeMock.mockReturnValue(false);
    const target = '';

    const result = checkIsOneOrThree(target);

    expect(result).toEqual(false);
  });
});
