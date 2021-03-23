//Прилипающие меню
'use strict';

const stickyMenu = () => {
  const menu = document.querySelector('.top-menu');
  const startPos = menu.offsetTop;
  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= startPos && window.innerWidth <= 768) {
      menu.style.position = 'fixed';
    } else {
      menu.removeAttribute('style');
    }
  });
};

export default stickyMenu;
