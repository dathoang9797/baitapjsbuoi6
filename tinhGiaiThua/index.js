const tinhGiaiThua = (n) => {
    if (n < 1) return false;
    if (n == 1) return 1;
    let sum = 1;
    for (let i = 2; i <= n; i++) {
      sum *= i;
      // console.log(i);
    }
    return sum;
  };
  
  const result = tinhGiaiThua(8);
  console.log({ result });