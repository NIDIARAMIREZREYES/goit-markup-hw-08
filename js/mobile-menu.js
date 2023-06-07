const menuButton = document.getElementById('menu-button');
const menuList = document.getElementById('menu-list');
const closeButton = document.getElementById('close-button');

menuButton.addEventListener('click', () => {
  menuList.classList.add('show');
  menuButton.style.display = 'none';
  closeButton.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  menuList.classList.remove('show');
  closeButton.style.display = 'none';
  menuButton.style.display = 'block';
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 480) {
    menuList.classList.remove('show');
    closeButton.style.display = 'none';
    menuButton.style.display = 'none';
  }
});