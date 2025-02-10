document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop - 70, // adjust offset for fixed header
        behavior: "smooth",
      });
      // Close mobile menu if open
      if (window.innerWidth < 768) {
        document.querySelector("nav ul").classList.remove("active");
      }
    });
  });

  // Hamburger Menu Toggle for Mobile
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("active");
  });

  // Intersection Observer for Scroll Reveal Animations
  const revealElements = document.querySelectorAll(".section");
  const observerOptions = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal", "active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  revealElements.forEach((el) => observer.observe(el));

  // Typed Text Effect in Hero Section
  const typedElement = document.querySelector(".typed");
  const textArray = ["Software Engineer", "Innovator", "Problem Solver"];
  let textIndex = 0,
    charIndex = 0;
  let currentText = "";
  let isDeleting = false;
  function type() {
    if (textIndex < textArray.length) {
      if (!isDeleting && charIndex <= textArray[textIndex].length) {
        currentText = textArray[textIndex].substring(0, charIndex);
        typedElement.textContent = currentText;
        charIndex++;
        setTimeout(type, 150);
      } else if (isDeleting && charIndex >= 0) {
        currentText = textArray[textIndex].substring(0, charIndex);
        typedElement.textContent = currentText;
        charIndex--;
        setTimeout(type, 100);
      } else if (!isDeleting && charIndex > textArray[textIndex].length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        charIndex = 0;
        setTimeout(type, 500);
      }
    }
  }
  type();

  // Modal for Service "Get Started"
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const getStartedButtons = document.querySelectorAll(".get-started");
  const closeBtn = document.querySelector(".close-btn");

  getStartedButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const service = button.getAttribute("data-service");
      // Customize modal content based on service selected
      if (service === "Consulting Calls") {
        modalTitle.textContent = "Consulting Calls";
        modalDescription.textContent =
          "For a 20-minute consulting call at $80, we will discuss any Product Management topic you choose.";
      } else if (service === "Resume Reviews") {
        modalTitle.textContent = "Resume Reviews";
        modalDescription.textContent =
          "For $99, receive two rounds of comprehensive feedback to ensure your resume stands out.";
      } else {
        modalTitle.textContent = "Service Details";
        modalDescription.textContent = "More information coming soon.";
      }
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
