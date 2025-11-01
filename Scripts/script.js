// Destinations Dropdown Menu
const destinationsDropdown = document.getElementById('destinationsDropdown');
const firstDropdown = document.getElementById('firstDropdown');

// Activities Dropdown Menu
const activitiesDropdown = document.getElementById('activitiesDropdown');
const secondDropdown = document.getElementById('secondDropdown');

// First Dropdown, open and close
firstDropdown.addEventListener('click', (event) => {
  event.stopPropagation(); // mos e përhape klikimin te dokumenti
  destinationsDropdown.classList.toggle('show');
  activitiesDropdown.classList.remove('show-activities'); // it closes the other if it is open
});

// Second Dropdown, open and close
secondDropdown.addEventListener('click', (event) => {
  event.stopPropagation();
  activitiesDropdown.classList.toggle('show-activities');
  destinationsDropdown.classList.remove('show'); // it closes the other if it is open
});

// Close Dropdowns when clicked outside
document.addEventListener('click', (event) => {
  // if you click outside the dropdowns, than close
  if (!firstDropdown.contains(event.target) && !destinationsDropdown.contains(event.target)) {
    destinationsDropdown.classList.remove('show');
  }
  if (!secondDropdown.contains(event.target) && !activitiesDropdown.contains(event.target)) {
    activitiesDropdown.classList.remove('show-activities');
  }
});

// ============================
// HAMBURGER MENU         =====
// ============================

const menu = document.getElementById('menu');
const list = document.getElementById('list');

menu.addEventListener('click', ()=>{
  list.classList.toggle('show-menu');
})