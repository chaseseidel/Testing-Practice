export default function caesarCipher(string) {
  if (typeof string !== "string") {
    throw new Error("The input must be a string");
  }
  const caesarString = string.split("");
  caesarString.forEach((letter, index) => {
    if (Number(letter)) {
      throw new Error("The string cannot contain letters");
    }
    const charCode = letter.charCodeAt(0);
    caesarString[index] = String.fromCharCode(charCode + 1);
  });
  return caesarString.join("");
}
