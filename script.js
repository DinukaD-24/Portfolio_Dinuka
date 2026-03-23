// Scroll reveal functionality
document.addEventListener("DOMContentLoaded", () => {
    // Reveal elements on scroll
    const reveals = document.querySelectorAll(".reveal, .reveal-right");
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add("active");
            }
        });
    };
    
    // Initial check
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener("scroll", revealOnScroll);
    
    // Navbar style on scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
    
    // Mobile menu toggle
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    
    mobileBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const icon = mobileBtn.querySelector("i");
        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const icon = mobileBtn.querySelector("i");
            if (icon.classList.contains("fa-times")) {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    });
});
