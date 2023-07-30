import caesarCipher from "./caesarCipher";

test("Check caesarCipher", () => {
  expect(caesarCipher("Hello")).toBe("Ifmmp");
});

test("Check caesarCipher lowercase", () => {
  expect(caesarCipher("mean")).toBe("nfbo");
});

test("Check caesarCipher uppercase", () => {
  expect(caesarCipher("HAPPY")).toBe("IBQQZ");
});

test("Check caesarCipher number in string", () => {
  expect(() => caesarCipher("O123K")).toThrow();
});

test("Check caesarCipher number input", () => {
  expect(() => caesarCipher(12)).toThrow();
});
