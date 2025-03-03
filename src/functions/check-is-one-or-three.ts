import { checkIsOne } from './check-is-one';
import { checkIsThree } from './check-is-three';

export const checkIsOneOrThree = (target: any): boolean => {
  const isOne = checkIsOne(target);
  if (isOne) return true;

  const isThree = checkIsThree(target);
  if (isThree) return true;

  return false;
};
