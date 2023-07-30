import Calculator from "./calculator";

const calculator = new Calculator();

test("Check add function", () => {
  expect(calculator.add(10, 4)).toBe(14);
});

test("Check subtract function", () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test("Check subtract function negatives", () => {
  expect(calculator.subtract(4, 10)).toBe(-6);
});

test("Check division function", () => {
  expect(calculator.divide(15, 3)).toBe(5);
});

test("Check division function decimal", () => {
  expect(calculator.divide(5, 10)).toBe(0.5);
});

test("Check division function divide by zero", () => {
  expect(() => calculator.divide(3, 0)).toThrow();
});

test("Check multiply function", () => {
  expect(calculator.multiply(6, 7)).toBe(42);
});

test("Check multiply function decimal", () => {
  expect(calculator.multiply(3, 0.5)).toBe(1.5);
});

test("Check multiply function decimal", () => {
  expect(calculator.multiply(3, 0)).toBe(0);
});
