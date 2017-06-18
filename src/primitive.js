// @flow
const countries = {
  US: "United States",
  IT: "Italy",
  FR: "France"
};

type Country = $Keys<typeof countries>;

const italy: Country = 'IT';
const nope: Country = 'nope'; // 'nope' is not a Country

type Props = { name: string, age: number };
type DefaultProps = { age: number };
type RequiredProps = $Diff<Props, DefaultProps>;

function setProps(props: RequiredProps) {
  // ...
}

setProps({ name: 'foo' });
setProps({ name: 'foo', age: 42, baz: false }); // you can pass extra props too
setProps({ age: 42 }); // error, name is required