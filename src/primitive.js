// @flow
type MyObject = {
    foo: number,
    bar: boolean,
    baz: string
};

const val: MyObject = {
    foo: 1,
    bar: true,
    baz: 'hi'
};

type NewObject<A, B, C> = {
    foo: A,
    bar: B,
    baz: C
};

const value: NewObject<number, boolean, string> = {
    foo: 1,
    bar: true,
    baz: false // Error!
};