//Появление стрелки
'use strict';

const arrowTop = () => {
  const header = document.querySelector('header');
  const startPos = header.offsetHeight;
  const arrow = document.getElementById('totop');
  arrow.style.display = 'none';
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > startPos) {
      arrow.style.display = 'block';
    } else {
      arrow.style.display = 'none';
    }
  });
};

export default arrowTop;
