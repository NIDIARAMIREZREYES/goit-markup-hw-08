const navbarToggleButton = document.querySelector('.navbar__toggle-button');
const navbarList = document.querySelector('.navbar__list');



navbarToggleButton.addEventListener('click', () => {
  navbarList.classList.toggle('active');
});