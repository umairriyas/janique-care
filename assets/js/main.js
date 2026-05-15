document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("[data-menu-btn]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (mobileMenu && mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  });

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const requiredFields = form.querySelectorAll("[required]");
      let valid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = "#ef4444";
        } else {
          field.style.borderColor = "";
        }
      });

      if (!valid) {
        e.preventDefault();
        alert("Please fill in all required fields.");
      }
    });
  }
});