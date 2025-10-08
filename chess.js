// Toggle Dark Mode
const toggleButton = document.getElementById('toggle-btn');
const body = document.body;

// Change the theme on button click
toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  const icon = toggleButton.querySelector('i');
  
  // Toggle Sun/Moon icon
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
});

// Hamburger Menu (Mobile Navigation)
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu visibility
hamburgerMenu.addEventListener('click', function() {
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  if (!mobileMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
    mobileMenu.classList.remove('active');
  }
});
