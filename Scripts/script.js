// ============================
// DROPDOWN MENUS      
// ============================

// Destinations Dropdown Menu
const destinationsDropdown = document.getElementById('destinationsDropdown');
const firstDropdown = document.getElementById('firstDropdown');

// Activities Dropdown Menu
const activitiesDropdown = document.getElementById('activitiesDropdown');
const secondDropdown = document.getElementById('secondDropdown');

// First Dropdown, open and close
firstDropdown.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  destinationsDropdown.classList.toggle('show');
  activitiesDropdown.classList.remove('show-activities'); // close the other dropdown
});

// Second Dropdown, open and close
secondDropdown.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  activitiesDropdown.classList.toggle('show-activities');
  destinationsDropdown.classList.remove('show'); // close the other dropdown
});

// Close Dropdowns when clicked outside
document.addEventListener('click', (event) => {
  if (!firstDropdown.contains(event.target) && !destinationsDropdown.contains(event.target)) {
    destinationsDropdown.classList.remove('show');
  }
  if (!secondDropdown.contains(event.target) && !activitiesDropdown.contains(event.target)) {
    activitiesDropdown.classList.remove('show-activities');
  }
});

// ============================
// HAMBURGER MENU          
// ============================

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const list = document.getElementById('list');

  // open and close hamburgerr menu
  menu.addEventListener('click', () => {
    list.classList.toggle('show-menu');
  });

  // Close hamburger menu when a link is clicked
  const links = list.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // check if the link is in the dropdowns
      if (!link.closest('#firstDropdown') && !link.closest('#secondDropdown')) {
        list.classList.remove('show-menu'); // close hamburger menu
        // also close dropdowns if they are open
        destinationsDropdown.classList.remove('show');
        activitiesDropdown.classList.remove('show-activities');
      }
    });
  });
});
