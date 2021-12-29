const timSoNguyenDuongNhoNhat = () => {
  let n = 0;
  let sum = 0;
  for (let i = 1; sum < 10000; i++) {
    sum += i;
    n++;
  }
  // console.log({ sum });
  // console.log({ n });
  return n;
};

const result = timSoNguyenDuongNhoNhat();
console.log({ result });
