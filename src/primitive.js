// @flow
const tuple1: [number] = [1];
const tuple2: [number, boolean] = [1, true];
tuple3.push(3); // Error!

const num: number = tuple2[0];
const bool: boolean = tuple2[1];

function getItem(n: number) {
    const val: mixed = tuple2[n];
}

tuple1[0] = 1;


const Tuple1: [number, boolean] = [1, true];
const Tuple2: [number, boolean, void] = Tuple1; // Error!

const arr: number[] = [1, 2];
const tupl: [number, number] = array; // Error!
