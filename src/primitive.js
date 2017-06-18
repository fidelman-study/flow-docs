// @flow
/*::
 type MyAlias = {
 foo: number,
 bar: boolean,
 baz: string,
 };
 */

function method(value /*: MyAlias */) /*: boolean */ {
  return value.bar;
}

method({ foo: 1, bar: true, baz: "oops" });

/*::
 type Foo = {
   foo: number,
   bar: boolean,
   baz: string
 };
 */

class MyClass {
  /*:: prop: string; */
}

/*flow-include
 type Foo1 = {
   foo: number,
   bar: boolean,
   baz: string
 };
 */

class MyClass1 {
  /*flow-include prop: string; */
}