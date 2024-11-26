document.getElementById('burgerButton').addEventListener('click', () => {
  const menuText = document.getElementById('menuText');
  menuText.style.display = menuText.style.display === 'none' || menuText.style.display === '' ? 'block' : 'none';
});
