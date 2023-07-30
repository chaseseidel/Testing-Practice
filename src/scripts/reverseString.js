export default function reverseString(string) {
  if (typeof string !== "string") {
    string = `${string}`;
  }

  string = string.split("");
  const reverseString = [];
  while (string.length > 0) {
    reverseString.push(string.pop());
  }

  return reverseString.join("");
}
