// Mobile burger
const burger = document.querySelector('.burger');
const menu = document.querySelector('#menu');
burger?.addEventListener('click', ()=>{
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
});

// Active nav link by pathname
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(a=>{
  const href = a.getAttribute('href');
  if (href && href.endsWith ? href.endsWith(path) : href.slice(-path.length)===path) a.classList.add('active');
});

// Footer year
document.querySelectorAll('.year').forEach(el=> el.textContent = new Date().getFullYear());

// Booking form handler (on contact page)
const form = document.getElementById('book');
const status = document.getElementById('status');
const toast = document.getElementById('toast');
function showToast(msg, ok=true){
  if(!toast) return;
  toast.textContent = msg;
  toast.style.background = ok ? 'var(--accent)' : '#d32f2f';
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'), 3800);
}
if(form){
  // set today date
  const dateInput = document.getElementById('date');
  if(dateInput){ dateInput.value = new Date().toISOString().split('T')[0]; }

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    try{
      const res = await fetch(form.action, {method:'POST', body:data, headers:{Accept:'application/json'}});
      if(res.ok){
        status.textContent = '✅ Дякуємо! Бронювання відправлено.';
        status.style.color = 'var(--accent)';
        form.reset();
        showToast('Бронювання відправлено!');
      }else{
        status.textContent = '⚠️ Помилка при відправці. Спробуйте ще раз.';
        status.style.color = '#d32f2f';
        showToast('Помилка при відправці', false);
      }
    }catch(err){
      status.textContent = '⚠️ Проблема з мережею. Спробуйте пізніше.';
      status.style.color = '#d32f2f';
      showToast('Проблема з мережею', false);
    }
  });
}
