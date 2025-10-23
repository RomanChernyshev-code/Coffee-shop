// Бургер-меню
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Форма обратной связи
const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  message.textContent = "Спасибо! Мы свяжемся с вами ☕";
  message.style.color = "#2b4c6f";
  form.reset();
});

// Динамический год
document.getElementById('year').textContent = new Date().getFullYear();
