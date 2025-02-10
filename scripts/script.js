document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop - 60, // Adjust for fixed header
                behavior: "smooth"
            });
        });
    });
});
