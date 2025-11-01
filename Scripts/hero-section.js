// ==========================
// HERO SLIDER
// ==========================
const slides = document.querySelectorAll('.hero-image');
const nextBtn = document.querySelector('.arrow-right');
const prevBtn = document.querySelector('.arrow-left');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
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

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}


nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});


startAutoSlide();

// ==========================
// NAVBAR SCROLL
// ==========================
const navbar = document.querySelector('#hero-section nav');
window.addEventListener('scroll', () => {
  if(window.scrollY >= 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});