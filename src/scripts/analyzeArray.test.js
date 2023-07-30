import analyzeArray from "./analyzeArray";

test("Check analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Check non-array input", () => {
  expect(() => analyzeArray("Hi")).toThrow();
});

test("Check array with string input", () => {
  expect(() => analyzeArray([1, 8, "3", 4, 2, 6])).toThrow();
});
