import {
  describe,
  test,
  MockInstance,
  beforeEach,
  vi,
  afterEach,
  Mock,
} from 'vitest';

describe('tempt', () => {
  let mockCheckIsThree: Mock;

  beforeEach(() => {
    mockCheckIsThree = vi.fn(() => true);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('', () => {
    // vi.resetAllMocks();
    vi.restoreAllMocks();
    console.log(mockCheckIsThree());
  });
});
