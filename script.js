

// Initial check
revealOnScroll();
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(0, 0, 0, 0.7)';
    } else {
      navbar.style.background = 'rgba(0, 0, 0, 0.5)';
    }
  });
// Reveal elements on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

