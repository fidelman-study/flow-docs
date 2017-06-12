// @flow
const method = (value: 2, name: "success" | "warning" | "danger") => {
  return { value, name };
};

method(2, "warning");