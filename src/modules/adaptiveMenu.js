'use strict';

const adaptiveMenu = () => {
  const menuButton = document.querySelector('.menu-button');
  const popUpMenu = document.querySelector('.popup-menu');
  const closeMenuBtn = document.querySelector('.close-menu-btn');
  menuButton.addEventListener('click', () => {
    popUpMenu.style.display = 'flex';
  });
  closeMenuBtn.addEventListener('click', () => {
    popUpMenu.removeAttribute('style');
  });
};

export default adaptiveMenu;
