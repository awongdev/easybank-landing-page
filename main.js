'use strict';
const navMenu = document.querySelector('#nav-menu');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const overlay = document.querySelector('#overlay');

function toggleMenu() {
  hamburgerMenu.classList.toggle('open');
  navMenu.classList.toggle('scale-y-0');
  navMenu.classList.toggle('scale-y-100');
  overlay.classList.toggle('scale-y-0');
  overlay.classList.toggle('scale-y-100');
}

hamburgerMenu.addEventListener('click', () => {
  toggleMenu();
});

overlay.addEventListener('click', () => {
  toggleMenu();
  
});
