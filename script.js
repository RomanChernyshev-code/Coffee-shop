document.addEventListener('DOMContentLoaded', () => {
  // Анімація появи
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})
  },{threshold:0.2});
  document.querySelectorAll('.menu-item,.feature-card,.contact-form').forEach(el=>observer.observe(el));

  // Підсвічування активного пункту меню
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll',()=>{
    let cur='';
    sections.forEach(s=>{if(scrollY>=s.offsetTop-100)cur=s.id});
    links.forEach(l=>{l.classList.toggle('active',l.getAttribute('href').includes(cur))});
  });

  // Кнопка «вгору»
  const topBtn=document.getElementById('toTop');
  window.addEventListener('scroll',()=>{topBtn.classList.toggle('show',window.scrollY>300)});
  topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

  // Рік у футері
  document.getElementById('year').textContent=new Date().getFullYear();

  // Повідомлення після відправки форми
  const form=document.querySelector('.contact-form');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const name=form.querySelector('input').value;
    alert(`Дякуємо, ${name}! Ваше повідомлення надіслано ☕`);
    form.reset();
  });
});
