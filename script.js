document.addEventListener("DOMContentLoaded", function () {
    // Fade-in animations on page load
    const fadeIns = document.querySelectorAll(".fade-in");
    fadeIns.forEach((element) => {
        element.classList.add("show");
    });

    // Scroll animations - Fade-in on scroll
    const scrollElements = document.querySelectorAll(".fade-in, .scroll-fade");

    function checkScroll() {
        scrollElements.forEach((el) => {
            const elementPosition = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementPosition < windowHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on page load to catch already visible elements
});
