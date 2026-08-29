// Deep Clone an Object

function deepClone(obj) {
  const clone = {};

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      clone[key] = deepClone(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }

  return clone;
}

console.log(deepClone({ a: 1, b: { c: 2 } }));