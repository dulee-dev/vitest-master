import { delay } from 'src/libs/delay';
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  test,
} from 'vitest';

describe('each', () => {
  beforeEach(() => {
    console.log('before each');
  });

  afterEach(() => {
    console.log('after each');
    console.log('');
  });

  test('1', () => {
    console.log('1');
  });

  test('2', () => {
    console.log('2');
  });
});

describe.concurrent('all', () => {
  // beforeAll(() => {
  //   console.log('before all');
  // });

  // afterAll(() => {
  //   console.log('after all');
  //   console.log('');
  // });

  test('1', async () => {
    await delay(300);
    console.log('1');
  });

  test('2', async () => {
    await delay(100);
    console.log('2');
  });

  test.sequential('3', async () => {
    await delay(800);
    console.log('3');
  });

  test.sequential('4', async () => {
    await delay(500);
    console.log('4');
  });
});

describe.concurrent;
describe.sequential;
describe.shuffle;
