export default function capitalize(string) {
  if (typeof string !== typeof "string") {
    throw new Error("The input must be a string");
  }

  let firstLetter = string.charAt(0);

  if (Number(firstLetter)) {
    throw new Error("The first letter cannot be a number");
  }

  return firstLetter.toUpperCase() + string.slice(1);
}
