// @flow
type A = { a: number };
type B = { b: boolean };
type C = { c: string };

function method(value: A & B & C) {
    // ...
}

method({ a: 1 }); // Error!
method({ a: 1, b: true }); // Error!
method({ a: 1, b: true, c: 'three' }); // Works!


type Foo = number & string;
type Bar = boolean & Array<number>;

type Baz = Foo & Bar;


type One = { foo: number };
type Two = { bar: boolean };

type Both = One & Two;

var value: Both = {
    foo: 1,
    bar: true
};