// @flow
const method = (x: number, y: string, z: boolean, w: null, o: void, k: ?number) => {
  return { x, y, z, w, o, k };
};

method(1, '1', true, null, undefined, 1);