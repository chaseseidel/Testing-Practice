import capitalize from "./capitalize";

test("Correctly capitalizes", () => {
  expect(capitalize("hi")).toBe("Hi");
});

test("Check input value type", () => {
  expect(() => capitalize(1)).toThrow();
});

test("Check string's first value", () => {
  expect(() => capitalize("1")).toThrow();
});

test("Check string of length one", () => {
  expect(capitalize("a")).toBe("A");
});
