// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
