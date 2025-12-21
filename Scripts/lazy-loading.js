// Lazy loading for dynamically created images
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
      
      observer.unobserve(img);
    }
  });
}, {
  rootMargin: '50px',
  threshold: 0.01
});

function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
}

function reinitLazyLoading() {
  imageObserver.disconnect();
  initLazyLoading();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLazyLoading);
} else {
  initLazyLoading();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initLazyLoading, reinitLazyLoading };
}

