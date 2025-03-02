import { delay } from 'src/libs/delay';

export const waitForCheckIsOne = async (target: any): Promise<boolean> => {
  await delay(100);

  const ok = target === 1;

  return ok;
};
