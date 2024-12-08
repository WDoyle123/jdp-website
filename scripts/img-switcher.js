document.addEventListener("DOMContentLoaded", function () {
  const leftArrow = document.getElementById('left-button');
  const rightArrow = document.getElementById('right-button');
  const aatImg = document.getElementById('aat');
  const ifaImg = document.getElementById('ifa');
  const sageImg = document.getElementById('sage');
  const xeroImg = document.getElementById('xero');


  let activeImg = aatImg;

  function imgSwap(direction) {
    const imgs = [aatImg, ifaImg, sageImg, xeroImg];

    const currentIndex = imgs.indexOf(activeImg);
    let nextIndex;

    if (direction === 'left') {
      nextIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    } else if (direction === 'right') {
      nextIndex = (currentIndex + 1) % imgs.length;
    }

    imgs.forEach((img, index) => {
      if (index === nextIndex) {
        img.classList.remove('hidden');
        activeImg = img; 
      } else {
        img.classList.add('hidden');
      }
    });
  }

  leftArrow.addEventListener('click', () => imgSwap('left'));
  rightArrow.addEventListener('click', () => imgSwap('right'));

  setInterval(() => imgSwap('right'), 5000);
});

