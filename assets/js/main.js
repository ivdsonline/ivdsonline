tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#009bc1",
        secondary: "#2a2a2c",
      },
      fontFamily: {
        IRANSansX: ["IRANSansX", "sans-serif"],
      },
      maxWidth: {
        container: "1335px",
      },
    },
  },
};

function copyCode(code) {
  navigator.clipboard
    .writeText(code)
    .then(function () {
      const button = event.target;
      const originalText = button.textContent;
      button.textContent = "کپی شد!";
      button.classList.add("bg-green-500");

      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove("bg-green-500");
      }, 2000);
    })
    .catch(function (err) {
      console.error("خطا در کپی کردن: ", err);
    });
}

// Intersection Observer for animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

// Apply to price cards
document.querySelectorAll(".price-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Floating contact position adjustment
let ticking = false;
function updateFloatingContact() {
  const floatingContact = document.querySelector(".floating-contact");
  if (floatingContact) {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercent = scrollY / (documentHeight - windowHeight);
    const newTop = 50 + scrollPercent * 20;
    floatingContact.style.top = `${Math.min(newTop, 70)}%`;
  }
  ticking = false;
}

window.addEventListener("scroll", function () {
  if (!ticking) {
    requestAnimationFrame(updateFloatingContact);
    ticking = true;
  }
});
