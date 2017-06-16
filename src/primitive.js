// @flow
function identity<T>(value: T): T {
    return value;
}

function method(func: <T>(param: T) => T) {}

class Item<T> {
    prop: T;

    constructor(param: T) {
        this.prop = param;
    }

    method(): T {
        return this.prop;
    }
}

const number = new Item(1);