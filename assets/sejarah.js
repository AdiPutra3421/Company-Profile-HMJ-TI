// Smooth scroll ketika tombol "Lihat Perjalanan" diklik
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn-see");

  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const target = document.querySelector("#perjalanan");

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }
});

const observer = new IntersectionObserver((entries) => {
  let index = 0;

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // delay berdasarkan urutan
      entry.target.style.transitionDelay = `${index * 0.8}s`;
      entry.target.classList.add('active');
      index++;
    }
  });
});

// observe semua elemen .reveal
document.querySelectorAll('.scroll-text').forEach(el => observer.observe(el));


