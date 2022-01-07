import { observable, autorun } from "./observer";

test("can auto trigger callback when object value updated", () => {
  const object = observable({
    value: 0,
  });

  const cb = jest.fn(() => object.value);
  autorun(cb);

  object.value = 1;
  object.value = 2;

  expect(cb).toBeCalledTimes(3);
});

test("only trigger callback when used object value updated", () => {
  const object = observable({
    value: 0,
    value1: 0,
  });

  const cb = jest.fn(() => object.value);
  autorun(cb);

  object.value1 = 1;
  object.value1 = 2;

  object.value = 1;

  expect(cb).toBeCalledTimes(2);
});
