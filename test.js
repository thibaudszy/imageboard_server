const a = 1;
const obj = { a: "Avalue", b: "Bvalue", c: "Cvalue" };

const { a: abc, ...restOfObj } = obj;
console.log(restOfObj);
