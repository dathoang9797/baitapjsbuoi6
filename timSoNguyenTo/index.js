const buttonEl = document.querySelector('button');
const containerEl = document.querySelector('#container');
const soNguyenToEl = document.getElementById('soNguyenTo');

const checkPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= n - 1; i++) {
    if (n % i == 0) return false;
  }
  return true;
};

buttonEl.addEventListener('click', function () {
  let soNguyenToVal = +soNguyenToEl.value;
  console.log({ soNguyenToVal });
  containerEl.innerHTML = ' ';
  for (let i = 2; i <= soNguyenToVal; i++) {
    if (checkPrime(i)) {
      containerEl.innerHTML += ' ' + i;
    }
  }
});
