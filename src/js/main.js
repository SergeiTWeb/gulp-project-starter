// ============================================================================
// DEMO MODULE
// ============================================================================
const sum = require("./module/sum.js");
console.log(sum(2, 10));

// ============================================================================
// BACK TO TOP BUTTON
// Appears after scrolling, smooth scroll to top on click
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Create button element
  const topBtn = document.createElement('button');
  topBtn.className = 'back-to-top';
  topBtn.innerHTML = '↑';
  topBtn.setAttribute('aria-label', 'Back to top');
  topBtn.setAttribute('title', 'Back to top');
  document.body.appendChild(topBtn);

  // Show/hide button on scroll
  const toggleButton = () => {
    if (window.scrollY > 400) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Event listeners
  window.addEventListener('scroll', toggleButton);
  topBtn.addEventListener('click', scrollToTop);

  // Keyboard accessibility
  topBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  });
});