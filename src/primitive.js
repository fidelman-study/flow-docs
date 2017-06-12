// @flow
function method<T>(value: T): T {
  return value; // return the same type as argument
}
method(1);

function getTypeOf(value: mixed): string {
  return typeof value;
}
getTypeOf(1);

function stringify(value: mixed) {
    // $ExpectError
    return "" + value; // Error!
}
stringify("foo");

function stringify1(value: mixed) {
    if (typeof value === 'string') {
        return "" + value; // Works!
    } else {
        return "";
    }
}
stringify1("foo");

