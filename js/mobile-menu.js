const menuButton = document.getElementById('menu-button');
const menuList = document.getElementById('menu-list');

menuButton.addEventListener('click', () => {
  menuList.classList.toggle('show');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 480) {
    menuList.classList.remove('show');
  }
});