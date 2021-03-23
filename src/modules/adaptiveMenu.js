//Адаптивное меню
'use strict';

const adaptiveMenu = () => {
  const menuButton = document.querySelector('.menu-button');
  const popUpMenu = document.querySelector('.popup-menu');
  menuButton.addEventListener('click', (event) => {
    if (event.target.matches('img')) {
      popUpMenu.style.display = 'flex';
    }
  });
  popUpMenu.addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('.close-menu-btn') || target.matches('[href^="#"]')) {
      popUpMenu.removeAttribute('style');
    }
  });
};

export default adaptiveMenu;
