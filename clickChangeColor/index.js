const buttonEl = document.querySelector('button');
const containerEl = document.querySelector('#container');

buttonEl.addEventListener('click', function () {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      containerEl.innerHTML += `<div id="${i}" style="background-color:red"></div>`;
    } else {
      containerEl.innerHTML += `<div id="${i}" style="background-color:blue"></div>`;
    }
  }
});
