import reverseString from "./reverseString";

test("Check length one", () => {
  expect(reverseString("H")).toBe("H");
});

test("Check length two", () => {
  expect(reverseString("Ok")).toBe("kO");
});

test("Check type conversion of length one", () => {
  expect(reverseString(1)).toBe("1");
});

test("Check type conversion of length 2", () => {
    expect(reverseString(32)).toBe("23");
  });
