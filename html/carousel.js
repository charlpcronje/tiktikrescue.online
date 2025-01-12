// File: script.js

/**
 * @file script.js
 * @description JavaScript for Modern Logo Carousel functionality.
 */

/**
 * Query all required DOM elements
 */
const logos = document.querySelectorAll('.logo');
const prevBtn = document.querySelector('.chevron.left');
const nextBtn = document.querySelector('.chevron.right');

let currentIndex = 0;
let intervalId;

/**
 * Displays the logo at the specified index
 * @param {number} index - The index of the logo to display
 */
function showLogo(index) {
  logos.forEach(logo => logo.classList.remove('active'));
  logos[index].classList.add('active');
}

/**
 * Advances to the next logo
 */
function nextLogo() {
  currentIndex = (currentIndex + 1) % logos.length;
  showLogo(currentIndex);
}

/**
 * Goes back to the previous logo
 */
function prevLogo() {
  currentIndex = (currentIndex - 1 + logos.length) % logos.length;
  showLogo(currentIndex);
}

/**
 * Starts the automatic slideshow
 */
function startAutoplay() {
  intervalId = setInterval(nextLogo, 3000);
}

/**
 * Stops the automatic slideshow
 */
function stopAutoplay() {
  clearInterval(intervalId);
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
  prevLogo();
  stopAutoplay();
  startAutoplay();
});

nextBtn.addEventListener('click', () => {
  nextLogo();
  stopAutoplay();
  startAutoplay();
});

// Start autoplay on load
startAutoplay();

// Pause autoplay when hovering over carousel
document.querySelector('.carousel-container').addEventListener('mouseenter', stopAutoplay);
document.querySelector('.carousel-container').addEventListener('mouseleave', startAutoplay);
