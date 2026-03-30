// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Navbar Scroll Effect
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    // Animate hamburger to X (optional simple toggle for now)
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });

  // Scroll Reveal Animation
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100; // Trigger points before elements reach the screen bottom

    reveals.forEach((reveal) => {
      const revealTop = reveal.getBoundingClientRect().top;

      if (revealTop < windowHeight - revealPoint) {
        reveal.classList.add("active");
      }
    });
  };

  // Initial check and scroll listener
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  // Handle contact form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("name").value;
      const company = document.getElementById("company").value;
      const interest = document.getElementById("interest").value;
      
      const subject = `New Inquiry from ${name} at ${company}`;
      const bodyText = `Name: ${name}\nCompany: ${company}\nPrimary Interest: ${interest}\n\nPlease provide more details below:\n`;
      
      window.location.href = `mailto:info@carbonpod.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = "Opening Mail Client...";
      btn.style.background = "var(--primary-green)";
      contactForm.reset();
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = "";
      }, 3000);
    });
  }
});
