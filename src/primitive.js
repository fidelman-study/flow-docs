// @flow
const Arr1: Array<number> = [1, 2, 3];
const Arr2: Array<boolean> = [1, 2, 3];

const arr1: number[] = [1, 2, 3];
const arr2: { foo: string }[] = [{ foo: 'hi' }];

const arr3: ?number[] = [1, 2];

let array: number[] = [0, 1, 2];
let value: number | void = array[1];

if (value !== undefined) {
    // number
}