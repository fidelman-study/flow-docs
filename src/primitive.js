// @flow
interface Serializable {
    serialize() : string;
}

class Foo {
    serialize() { return '[Foo]'; }
}

class Bar {
    serialize() { return '[Bar]'; }
}

const foo: Serializable = new Foo();
const bar: Serializable = new Bar();




interface Serializable1 {
    serialize() : string;
}

class Foo1 implements Serializable {
    serialize() { return '[Foo]'; }
}

class Bar1 implements Serializable {
    serialize() { return '[Bar]'; }
}


interface Invariant { property: number; }
interface Covariant { +readOnly: number; }
interface Contravariant { -writeOnly: number; }

var value1: Invariant = { propery: 1 }; // Error!
var value2: Covariant = { readOnly: 1 };
var value3: Contravariant = { writeOnly: 1 };

value2.readOnly = 2; // Error!
