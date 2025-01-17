const body = document.querySelector('body');

const btnVh = document.querySelector('.btn-vh');
const btnSvh = document.querySelector('.btn-svh');
const btnLvh = document.querySelector('.btn-lvh');
const btnDvh = document.querySelector('.btn-dvh');

const buttons = [btnVh, btnSvh, btnLvh, btnDvh];

buttons.forEach(btn => {
  btn.addEventListener('click', event => {
    buttons.forEach(btn => btn.classList.remove('active'));
    Array.from(body.classList).forEach(className => body.classList.remove(className));

    switch (event.target) {
      case btnVh:
        document.querySelector('body').classList.add('vh');
        break;
      case btnSvh:
        document.querySelector('body').classList.add('svh');
        break;
      case btnLvh:
        document.querySelector('body').classList.add('lvh');
        break;
      case btnDvh:
        document.querySelector('body').classList.add('dvh');
        break;
    }

    event.target.classList.add('active');
  });
});

btnVh.click();
