// Активне підсвічування пунктів меню при скролі (scrollspy)
const sections = [...document.querySelectorAll("section[id]")];
const navLinks = [...document.querySelectorAll(".nav-list a")];

function setActiveLink(){
  const scrollY = window.scrollY + 90; // з урахуванням фіксованого хедера
  let current = sections[0]?.id;
  for (const sec of sections){
    const top = sec.offsetTop;
    if (scrollY >= top) current = sec.id;
  }
  navLinks.forEach(a => {
    a.setAttribute("aria-current", a.getAttribute("href") === `#${current}` ? "true" : "false");
  });
}
window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

// Бургер-меню з ARIA
const burger = document.querySelector(".burger");
const navList = document.getElementById("navList");
burger?.addEventListener("click", () => {
  const expanded = burger.getAttribute("aria-expanded") === "true";
  burger.setAttribute("aria-expanded", String(!expanded));
  navList.classList.toggle("show");
});
navList?.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    burger.setAttribute("aria-expanded", "false");
    navList.classList.remove("show");
  }
});

// Плавна поява блоків (IntersectionObserver)
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReduced && "IntersectionObserver" in window){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if (e.isIntersecting){
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.1});
  document.querySelectorAll(".reveal").forEach(el=> io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el=> el.classList.add("show"));
}

// Обробка форми (клієнтська валідація)
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-message");
form?.addEventListener("submit", (e)=>{
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();
  const text = (data.get("message") || "").toString().trim();

  if (!name || !email || !text){
    msg.textContent = "Будь ласка, заповніть усі поля.";
    msg.style.color = "#b85c5c";
    return;
  }
  msg.textContent = "Дякуємо! Ми зв’яжемося з вами ☕";
  msg.style.color = "#8b5e3c";
  form.reset();
  setTimeout(()=> msg.textContent = "", 4000);
});

// Поточний рік у футері
document.getElementById("year").textContent = new Date().getFullYear();

