export const checkIs2100 = (): boolean => {
  const now = new Date();

  const year = now.getFullYear();
  const ok = year === 2100;

  return ok;
};
