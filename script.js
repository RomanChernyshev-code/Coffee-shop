// Бургер-меню
const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-links');
burger?.addEventListener('click', () => navList.classList.toggle('show'));
navList?.addEventListener('click', (e) => {
  if (e.target.matches('a')) navList.classList.remove('show');
});

// Повідомлення після відправки форми
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-message');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (msg){
    msg.textContent = 'Дякуємо! Ми зв’яжемося з вами ☕';
    setTimeout(()=> msg.textContent = '', 4000);
  }
  form.reset();
});

// Поточний рік у футері
document.getElementById('year').textContent = new Date().getFullYear();
