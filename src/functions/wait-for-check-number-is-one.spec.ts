import { describe, test, expect } from 'vitest';
import { waitForCheckNumberIsOne } from './wait-for-check-number-is-one';

describe('waitForCheckNumberIsOne', () => {
  test('not a number !!> error', async () => {
    const target = '';

    // undefined: 모든 에러 가능
    await expect(() => waitForCheckNumberIsOne(target)).rejects.toThrow();

    // 문자열 or regExp: error msg가 일치
    // expect(() => waitForCheckNumberIsOne(target)).toThrow('should be a number');
    // expect(() => waitForCheckNumberIsOne(target)).toThrow(/should/);

    // class 생성자: 자신이거나, 부모여야 된다
    // expect(() => waitForCheckNumberIsOne(target)).toThrow(TypeError);
    // expect(() => waitForCheckNumberIsOne(target)).toThrow(Error);

    // error instance: 같은 에러면서, 메시지도 같아야함
    // expect(() => waitForCheckNumberIsOne(target)).toThrow(
    //   new TypeError('should be a number')
    // );
  });

  test('not 1 -> false', () => {
    const target = 2;

    const result = waitForCheckNumberIsOne(target);

    expect(result).toEqual(false);
  });

  test('1 -> true', () => {
    const target = 1;

    const result = waitForCheckNumberIsOne(target);

    expect(result).toEqual(true);
  });
});
