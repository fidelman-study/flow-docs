// @flow
let value = 42;

(value: 42);     // Works!
(value: number); // Works!
(value: string); // Error!