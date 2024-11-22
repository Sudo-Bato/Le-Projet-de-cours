const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');

menuButton.addEventListener('click', function() {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});