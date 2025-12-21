// Dropdown menus functionality
// 68 Done - Modern variable declarations const used correctly
const destinationsDropdown = document.getElementById('destinationsDropdown');
const firstDropdown = document.getElementById('firstDropdown');
const activitiesDropdown = document.getElementById('activitiesDropdown');
const secondDropdown = document.getElementById('secondDropdown');
const languagesDropdown = document.getElementById('languagesDropdown');
const thirdDropdown = document.getElementById('thirdDropdown');

// Toggle destinations dropdown
// 81 Done - Events handled with addEventListener
// 74 Done - Arrow functions used for callback
// 83 Done - event.preventDefault() used where default behavior must be stopped
// 79 Done - CSS classes added, removed, or toggled via classList
firstDropdown.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  destinationsDropdown.classList.toggle('show');
  activitiesDropdown.classList.remove('show-activities');
  languagesDropdown.classList.remove('show');
});

// Toggle activities dropdown
// 81 Done - Events handled with addEventListener
// 74 Done - Arrow functions used for callback
// 83 Done - event.preventDefault() used where default behavior must be stopped
// 79 Done - CSS classes added, removed, or toggled via classList
secondDropdown.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  activitiesDropdown.classList.toggle('show-activities');
  destinationsDropdown.classList.remove('show');
  languagesDropdown.classList.remove('show');
});

// Toggle languages dropdown
// 81 Done - Events handled with addEventListener
// 74 Done - Arrow functions used for callback
// 83 Done - event.preventDefault() used where default behavior must be stopped
// 79 Done - CSS classes added, removed, or toggled via classList
thirdDropdown.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  languagesDropdown.classList.toggle('show');
  destinationsDropdown.classList.remove('show');
  activitiesDropdown.classList.remove('show-activities');
});

// Close dropdowns when clicking outside
// 81 Done - Events handled with addEventListener
// 74 Done - Arrow functions used for callback
// 71 Done - Conditional logic implemented using if
// 79 Done - CSS classes removed via classList
document.addEventListener('click', (event) => {
  if (!firstDropdown.contains(event.target) && !destinationsDropdown.contains(event.target)) {
    destinationsDropdown.classList.remove('show');
  }
  if (!secondDropdown.contains(event.target) && !activitiesDropdown.contains(event.target)) {
    activitiesDropdown.classList.remove('show-activities');
  }
  if (!thirdDropdown.contains(event.target) && !languagesDropdown.contains(event.target)) {
    languagesDropdown.classList.remove('show');
  }
});

// Hamburger menu
// 81 Done - Events handled with addEventListener
// 74 Done - Arrow functions used for callback
// 77 Done - DOM elements accessed using document.querySelectorAll
// 75 Done - Arrays used with forEach method
// 79 Done - CSS classes toggled via classList
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const list = document.getElementById('list');

  menu.addEventListener('click', (e) => {
    e.stopPropagation();
    list.classList.toggle('show-menu');
  });

  // Close menu when clicking on a link
  // 77 Done - DOM elements accessed using document.querySelectorAll
  // 75 Done - Arrays used with forEach method
  // 81 Done - Events handled with addEventListener
  // 71 Done - Conditional logic implemented using if
  const links = list.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      if (!link.closest('#firstDropdown') && !link.closest('#secondDropdown') && !link.closest('#thirdDropdown')) {
        list.classList.remove('show-menu');
        destinationsDropdown.classList.remove('show');
        activitiesDropdown.classList.remove('show-activities');
        languagesDropdown.classList.remove('show');
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!list.contains(e.target) && !menu.contains(e.target)) {
      list.classList.remove('show-menu');
      destinationsDropdown.classList.remove('show');
      activitiesDropdown.classList.remove('show-activities');
      languagesDropdown.classList.remove('show');
    }
  });
});

// Event cards toggle functionality
// 77 Done - DOM elements accessed using document.querySelectorAll
// 75 Done - Arrays used with forEach method
// 81 Done - Events handled with addEventListener
// 74 Done - Arrow functions used for callback
// 71 Done - Conditional logic implemented using if
// 79 Done - CSS classes added, removed, or toggled via classList
const arrows = document.querySelectorAll('.toggle-arrow');

arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    const eventCard = arrow.closest('.event-card');
    const desc = eventCard.querySelector('.event-description');

    // Close other open descriptions
    // 77 Done - DOM elements accessed using document.querySelectorAll
    // 75 Done - Arrays used with forEach method
    // 71 Done - Conditional logic implemented using if
    // 79 Done - CSS classes removed via classList
    document.querySelectorAll('.event-description.open').forEach(openDesc => {
      if (openDesc !== desc) {
        openDesc.classList.remove('open');
        const openArrow = openDesc.closest('.event-card').querySelector('.toggle-arrow');
        openArrow.classList.remove('up');
      }
    });

    // Toggle current card
    // 79 Done - CSS classes toggled via classList
    desc.classList.toggle('open');
    arrow.classList.toggle('up');
  });
});