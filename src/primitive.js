// @flow
const concat = (a: string, b: string): string => a + b;
concat('1', '2');

function method(str: string, bool?: boolean, ...nums: Array<number>): void {
    // ...
}
method('1', true, 1, 2, 3);

function error(callback: (error: Error | null, value: string | null) => void) {
    // ...
}
error(() => {});