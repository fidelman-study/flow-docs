// @flow
class MyClass<A, B, C> {
    constructor(arg1: A, arg2: B, arg3: C) {
    }

    method(value: string): number {
        return +value;
    }
}

let myInstance: MyClass<number, string, boolean> = new MyClass(1, '1', true);



class Class {
    props: number = 1;

    constructor(number: number) {
        this.props = number;
    }
}

const hi = new Class(1);