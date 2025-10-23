// Бургер-меню
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => navLinks.classList.toggle('active'));

// Повідомлення після відправки форми
const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  message.textContent = "Дякуємо! Ми зв’яжемось з вами ☕";
  message.style.color = "#2b4c6f";
  form.reset();
});

// Динамічний рік
document.getElementById('year').textContent = new Date().getFullYear();

