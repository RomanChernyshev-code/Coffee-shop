// Mobile nav toggle
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav__toggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Close menu on link click (mobile)
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

// Intersection reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Smooth scroll for "to top" (works with CSS too; here to ensure cross-browser)
document.querySelector('.to-top')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form (client-side demo)
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Basic validation
  const data = new FormData(form);
  const name = (data.get('name') || '').toString().trim();
  const email = (data.get('email') || '').toString().trim();
  const message = (data.get('message') || '').toString().trim();

  if (!name || !email || !message) {
    statusEl.textContent = 'Please fill out all fields.';
    statusEl.style.color = '#ffb4a2';
    return;
  }

  // Demo success (no backend here)
  await new Promise(r => setTimeout(r, 400));
  statusEl.textContent = 'Thanks! We received your message.';
  statusEl.style.color = '#c68a54';
  form.reset();
});

// Current year
document.getElementById('year').textContent = new Date().getFullYear();
