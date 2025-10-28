// -----------------------------
// Smooth Scroll for Navbar Links
// -----------------------------
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// -----------------------------
// Typing Animation
// -----------------------------
const typed = new Typed('.typing', {
  strings: ['DSA Enthusiast', 'AI-ML Learner', 'Full Stack Developer', 'Tech Explorer'],
  typeSpeed: 90,
  backSpeed: 40,
  backDelay: 1600,
  loop: true,
});

// -----------------------------
// Scroll Reveal Effects
// -----------------------------
ScrollReveal({
  distance: '80px',
  duration: 1500,
  delay: 100,
  reset: true,
});

ScrollReveal().reveal('.home .content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home .image', { origin: 'bottom' });
ScrollReveal().reveal('.about .content', { origin: 'right' });
ScrollReveal().reveal('.about .image', { origin: 'left' });
ScrollReveal().reveal('.skill', { origin: 'bottom', interval: 100 });
ScrollReveal().reveal('.edu-box', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.project', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.contact form', { origin: 'top' });

// -----------------------------
// Fade-In on Scroll
// -----------------------------
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('revealed');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// -----------------------------
// Contact Form Submission Handler
// -----------------------------
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
      method: contactForm.method,
      body: formData,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      formStatus.textContent = '✅ Message sent successfully!';
      formStatus.style.color = 'green';
      contactForm.reset();

      setTimeout(() => (formStatus.textContent = ''), 4000);
    } else {
      formStatus.textContent = '❌ Oops! There was a problem sending your message.';
      formStatus.style.color = 'red';
    }
  });
}

// -----------------------------
// Project Hover Overlay Effect
// -----------------------------
document.querySelectorAll('.project').forEach((project) => {
  const overlay = project.querySelector('.overlay');
  if (overlay) {
    project.addEventListener('mouseenter', () => {
      overlay.style.transition = 'bottom 0.4s ease-in-out';
    });
  }
});
