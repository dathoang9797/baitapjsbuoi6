const tinhTong = (x, n) => {
  if (!x || !n) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
    console.log({ x, i });
  }
  return sum;
};

const result = tinhTong(5, 5);
console.log({ result });
