// Theme toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
};

// Language toggle
const langBtn = document.getElementById("langToggle");
let isArabic = false;

langBtn.onclick = () => {
  isArabic = !isArabic;
  document.documentElement.lang = isArabic ? "ar" : "en";
  document.documentElement.dir = isArabic ? "rtl" : "ltr";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = isArabic ? el.dataset.ar : el.dataset.en;
  });
};
