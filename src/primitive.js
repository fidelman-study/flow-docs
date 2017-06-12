// @flow
const obj: {
    foo: number,
    bar: boolean,
    baz: string,
    blue?: boolean
} = {
    foo: 1,
    bar: true,
    baz: 'three'
};

const x = obj.hi; // Error!
obj.blue = false;


function method(obj: { foo: string }) {
    // ...
}
method({
    foo: "test",
    bar: 42
});

function method2(obj: {| foo: string |}) {
    // ...
}
method2({
    foo: "test",
    bar: 42 // Error!
});

var o: { [user_id: number]: string } = {};
obj[1] = "Julia";