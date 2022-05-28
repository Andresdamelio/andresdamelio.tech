interface ObjectDestructuring {
  [key: string]: any;
}

export const destruct = (
  obj: ObjectDestructuring,
  keys: string[]
): ObjectDestructuring => {
  return keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});
};
