export default function analyzeArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  let sum = 0;
  array.forEach((number) => {
    if (typeof number !== "number") {
      throw new Error("Array cannot contain any strings");
    }

    sum += number;
  });

  return {
    average: Math.floor(sum / array.length),
    min: Math.min.apply(null, array),
    max: Math.max.apply(null, array),
    length: array.length,
  };
}
