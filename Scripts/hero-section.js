// Hero section image slider
// 77 Done - DOM elements accessed using document.querySelectorAll and querySelector
// 68 Done - Modern variable declarations let and const used correctly
const slides = document.querySelectorAll('.hero-image');
const nextBtn = document.querySelector('.arrow-right');
const prevBtn = document.querySelector('.arrow-left');
let currentSlide = 0;
let slideInterval;

// 73 Done - Functions correctly declared (function declarations)
// 72 Done - Loops used (for loop)
// 79 Done - CSS classes added and removed via classList
function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// 84 Done - Basic use of timers such as setInterval
function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 3600);
}

// 84 Done - Basic use of timers such as clearInterval
function stopAutoSlide() {
  clearInterval(slideInterval);
}

// 81 Done - Events handled with addEventListener
// 74 Done - Arrow functions used for callback
nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

// 81 Done - Events handled with addEventListener
// 74 Done - Arrow functions used for callback
prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

startAutoSlide();

// Navbar scroll effect
// 77 Done - DOM elements accessed using document.querySelector
// 81 Done - Events handled with addEventListener
// 74 Done - Arrow functions used for callback
// 71 Done - Conditional logic implemented using if/else
// 79 Done - CSS classes added and removed via classList
const navbar = document.querySelector('#hero-section nav');
window.addEventListener('scroll', () => {
  if(window.scrollY >= 1) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});